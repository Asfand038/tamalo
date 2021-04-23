import React, { useEffect } from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import { Loader } from '../../components';

import { useAuth } from './auth-context';

const AuthenticatedRoute: React.FC = ({ children }) => {
  const { getUserInformation, isLoading, error, isLoggedIn } = useAuth();
  const history = useHistory();

  useEffect(() => {
    if (!isLoggedIn) {
      const token = localStorage.getItem('token');
      if (token) {
        getUserInformation();
      } else {
        history.push('/login');
      }
    }
  }, [getUserInformation, history, isLoggedIn]);

  if (isLoading) return <Loader color="#e1e1e1" />;
  if (error) return <Redirect to="/login" />;

  return <>{children}</>;
};

export default AuthenticatedRoute;
