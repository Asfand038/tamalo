import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
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
import { useAuth } from '../../contexts';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showErrorMessage, setShowErrorMessage] = useState(true);

  const { login, isLoading, error, isLoggedIn } = useAuth();

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    setEmail('');
    setPassword('');
    login(email, password);
  };

  return (
    <AuthLayout>
      {isLoggedIn && <Redirect to="/boards" />}
      {error && showErrorMessage && (
        <ErrorMessage>
          <p>{error}</p>
        </ErrorMessage>
      )}
      <StyledAuthCardTitle>Log in to Tamalo</StyledAuthCardTitle>
      <form onSubmit={submitHandler}>
        <StyledInputField
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setShowErrorMessage(false);
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
            setShowErrorMessage(false);
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
  );
};

export default LoginPage;
