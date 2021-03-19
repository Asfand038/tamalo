import React, { createContext, useContext, useState } from 'react';

interface IAuthContext {
  isLoggedIn: boolean;
  isLoading: boolean;
  error: string;
  userId: string;
  login: Function;
}

const initialContext = {
  isLoggedIn: false,
  isLoading: false,
  error: '',
  userId: '',
  login: () => {},
};

const AuthContext = createContext<IAuthContext>(initialContext);

export const AuthProvider: React.FC = (children) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [userId, setUserId] = useState('');
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
      localStorage.setItem('token', data.jwt);
      // eslint-disable-next-line no-underscore-dangle
      setUserId(data.user._id);
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
    userId,
    isLoading,
    isLoggedIn,
    error,
    login,
  };

  return <AuthContext.Provider value={authContextValue} {...children} />;
};

export const useAuth = () => useContext(AuthContext);
