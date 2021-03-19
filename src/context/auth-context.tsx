import React, { createContext, useContext, useState } from 'react';

interface IAuthContext {
  isLoggedIn: boolean;
  login: Function;
}

const initialContext = {
  isLoggedIn: false,
  login: () => {},
};

const AuthContext = createContext<IAuthContext>(initialContext);

const AuthProvider: React.FC = (children) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = async (identifier: string, password: string) => {
    const response = await fetch('https://tamalo.herokuapp.com/auth/local', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ identifier, password }),
    });
    response
      .json()
      .then((data) => {
        console.log(data);
        localStorage.setItem('token', data.jwt);
        setIsLoggedIn(true);
      })
      .catch((err) => {
        console.log(err);
        setIsLoggedIn(false);
      });
  };

  const authContextValue = {
    isLoggedIn,
    login,
  };

  return <AuthContext.Provider value={authContextValue} {...children} />;
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
