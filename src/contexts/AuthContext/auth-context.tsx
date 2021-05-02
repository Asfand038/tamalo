import React, { createContext, useContext, useState } from 'react';
import { getImgFromMockApi, IUser } from '../../utils';
import { sendLoginRequest, getUserInformationRequest } from './api';

interface IAuthContext {
  isLoggedIn: boolean;
  isLoading: boolean;
  error: string;
  user: IUser;
  login: Function;
  logout: Function;
  getUserInformation: Function;
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
  getUserInformation: () => {},
  logout: () => {},
};

const AuthContext = createContext<IAuthContext>(initialContext);

export const AuthProvider: React.FC = (children) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<IUser>(initialUserData);
  const [error, setError] = useState('');

  const login = async (identifier: string, password: string) => {
    setIsLoading(true);

    const data = await sendLoginRequest(identifier, password);
    if (data.user) {
      const image = await getImgFromMockApi();
      const { jwt, user } = data;
      localStorage.setItem('token', jwt);
      setUser({
        id: user.id,
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

  const getUserInformation = async () => {
    setIsLoading(true);
    const data = await getUserInformationRequest();

    if (data.statusCode === 401) {
      setError(data.message);
      setIsLoggedIn(false);
      setIsLoading(false);
      return;
    }

    const image = await getImgFromMockApi();
    setUser({
      id: data.id,
      email: data.email,
      username: data.username,
      profileImg: image,
    });
    setIsLoggedIn(true);
    setIsLoading(false);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    setUser(initialUserData);
  };

  const authContextValue = {
    user,
    isLoading,
    isLoggedIn,
    error,
    login,
    getUserInformation,
    logout,
  };

  return <AuthContext.Provider value={authContextValue} {...children} />;
};

export const useAuth = () => useContext(AuthContext);
