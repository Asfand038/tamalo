import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Divider } from '@material-ui/core';

import { AuthProviders } from '../../components';
import {
  AuthLayout,
  StyledAuthCardTitle,
  StyledInputField,
  StyledLink,
  StyledErrorMessage,
} from '../../layouts';
import { LoginButton, StyledIcon, StyledSSOLink } from './Login.styles';
import { useAuth } from '../../contexts';
import { getAppIcon } from '../../utils';

const LoginPage: React.FC = () => {
  const { login, isLoading, error, isLoggedIn } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    setEmail('');
    setPassword('');
    login(email, password);
  };

  return (
    <>
      <Helmet>
        <title>Login | Tamalo</title>
        <link rel="icon" href={getAppIcon()} />
      </Helmet>
      <AuthLayout>
        {isLoggedIn && <Redirect to="/boards" />}
        {error && (
          <StyledErrorMessage>
            <p>{error}</p>
          </StyledErrorMessage>
        )}
        <StyledAuthCardTitle>Log in to Tamalo</StyledAuthCardTitle>
        <form onSubmit={submitHandler}>
          <StyledInputField
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            variant="outlined"
            placeholder="Enter email"
            fullWidth
            autoFocus
            required
            disabled={isLoading}
          />
          <StyledInputField
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
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
    </>
  );
};

export default LoginPage;
