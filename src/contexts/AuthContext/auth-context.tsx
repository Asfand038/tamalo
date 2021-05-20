import React, { createContext, useContext, useState } from 'react';
import { IUser } from '../../utils';
import {
  sendLoginRequest,
  getUserInformationRequest,
  sendSignupRequest,
} from './api';

interface IAuthContext {
  isLoggedIn: boolean;
  isLoading: boolean;
  error: string;
  user: IUser;
  login: Function;
  logout: Function;
  getUserInformation: Function;
  signup: Function;
}

const initialUserData = {
  id: '',
  email: '',
  username: '',
  firstName: '',
  lastName: '',
};

const initialContext = {
  isLoggedIn: false,
  isLoading: false,
  error: '',
  user: initialUserData,
  login: () => {},
  getUserInformation: () => {},
  logout: () => {},
  signup: () => {},
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
      const { jwt, user } = data;
      const { id, email, username, firstName, lastName } = user;
      localStorage.setItem('token', jwt);
      setUser({
        id,
        email,
        username,
        firstName,
        lastName,
        profileImg: user.profileImg ? user.profileImg : undefined,
        bio: user.bio ? user.bio : undefined,
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

    const { id, email, username, firstName, lastName } = data;
    setUser({
      id,
      email,
      username,
      firstName,
      lastName,
      profileImg: user.profileImg ? user.profileImg : undefined,
      bio: user.bio ? user.bio : undefined,
    });
    setIsLoggedIn(true);
    setIsLoading(false);
  };

  const signup = async (
    email: string,
    firstName: string,
    lastName: string,
    username: string,
    password: string
  ) => {
    setIsLoading(true);

    const data = await sendSignupRequest(
      email,
      firstName,
      lastName,
      username,
      password
    );
    if (data.user) {
      const { jwt, user } = data;
      const { id, email, username, firstName, lastName } = user;
      localStorage.setItem('token', jwt);
      setUser({
        id,
        email,
        username,
        firstName,
        lastName,
        profileImg: user.profileImg ? user.profileImg : undefined,
        bio: user.bio ? user.bio : undefined,
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
    signup,
  };

  return <AuthContext.Provider value={authContextValue} {...children} />;
};

export const useAuth = () => useContext(AuthContext);
