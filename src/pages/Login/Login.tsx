import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Divider } from '@material-ui/core';

import { AuthProviders } from '../../components';
import {
  AuthLayout,
  StyledAuthCardTitle,
  StyledInputField,
  StyledLink,
} from '../../layouts';
import {
  LoginButton,
  StyledIcon,
  StyledSSOLink,
  ErrorMessage,
} from './Login.styles';
import { useAuth } from '../../context';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();
  const { login, isLoggedIn, isLoading, error } = useAuth();

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    setEmail('');
    setPassword('');
    login(email, password);
  };

  if (isLoggedIn) {
    history.push('/boards');
  }

  return (
    <AuthLayout>
      {error && (
        <ErrorMessage>
          <p>{error}</p>
        </ErrorMessage>
      )}
      <StyledAuthCardTitle>Log in to Tamalo</StyledAuthCardTitle>
      <form onSubmit={submitHandler}>
        <StyledInputField
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          variant="outlined"
          placeholder="Enter email"
          fullWidth
          required
          disabled={isLoading}
        />
        <StyledInputField
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          variant="outlined"
          placeholder="Enter password"
          type="password"
          fullWidth
          required
          disabled={isLoading}
        />
        <LoginButton
          type="submit"
          variant="contained"
          fullWidth
          disabled={isLoading}
        >
          Log in
        </LoginButton>
      </form>
      <div className="login-method-separator">OR</div>
      <AuthProviders />
      <StyledSSOLink to="#">Login with SSO</StyledSSOLink>
      <Divider className="authcard-divider" />
      <StyledLink to="#">Can&apos;t log in?</StyledLink>
      <StyledIcon />
      <StyledLink to="/signup">Sign up for an account</StyledLink>
    </AuthLayout>
  );
};

export default LoginPage;
