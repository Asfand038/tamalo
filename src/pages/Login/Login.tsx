import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Divider } from '@material-ui/core';

import { AuthProviders } from '../../components';
import { AuthLayout, StyledInputField, StyledLink } from '../../layouts';
import { LoginButton, StyledIcon, StyledSSOLink } from './Login.styles';
import { useAuth } from '../../context/auth-context';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();
  const { login, isLoggedIn } = useAuth();

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    login(email, password);
    if (isLoggedIn) {
      history.push('/boards');
    }
  };

  return (
    <AuthLayout>
      <div>Log in to Tamalo</div>
      <form onSubmit={submitHandler}>
        <StyledInputField
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          variant="outlined"
          placeholder="Enter email"
          fullWidth
          required
        />
        <StyledInputField
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          variant="outlined"
          placeholder="Enter password"
          type="password"
          fullWidth
          required
        />
        <LoginButton type="submit" variant="contained" fullWidth>
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
