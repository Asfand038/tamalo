import React, { createContext, useContext, useState } from 'react';
import { getImgFromMockApi } from '../../utils';

export interface IUser {
  id: string;
  email: string;
  username: string;
  profileImg: string;
}

interface IAuthContext {
  isLoggedIn: boolean;
  isLoading: boolean;
  error: string;
  user: IUser;
  login: Function;
}

const initialUserData = {
  id: '',
  email: '',
  username: '',
  profileImg: '',
};

const initialContext = {
  isLoggedIn: false,
  isLoading: false,
  error: '',
  user: initialUserData,
  login: () => {},
};

const AuthContext = createContext<IAuthContext>(initialContext);

export const AuthProvider: React.FC = (children) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<IUser>(initialUserData);
  const [error, setError] = useState('');

  const login = async (identifier: string, password: string) => {
    setIsLoading(true);
    const response = await fetch('https://tamalo.herokuapp.com/auth/local', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ identifier, password }),
    });
    const data = await response.json();

    if (data.user) {
      const image = await getImgFromMockApi();
      const { jwt, user } = data;
      localStorage.setItem('token', jwt);
      setUser({
        // eslint-disable-next-line no-underscore-dangle
        id: user._id,
        email: user.email,
        username: user.username,
        profileImg: image,
      });
      setIsLoggedIn(true);
      setIsLoading(false);
    }
    if (data.error) {
      setError(data.message[0].messages[0].message);
      setIsLoggedIn(false);
      setIsLoading(false);
    }
  };

  const authContextValue = {
    user,
    isLoading,
    isLoggedIn,
    error,
    login,
  };

  return <AuthContext.Provider value={authContextValue} {...children} />;
};

export const useAuth = () => useContext(AuthContext);
