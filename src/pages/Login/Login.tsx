import React from 'react';

import { Divider } from '@material-ui/core';

import { AuthProviders } from '../../components';
import { AuthLayout, StyledInputField, StyledLink } from '../../layouts';
import { LoginButton, StyledIcon, StyledSSOLink } from './Login.styles';

const LoginPage: React.FC = () => {
  return (
    <AuthLayout>
      <div>Log in to Tamalo</div>
      <StyledInputField
        variant="outlined"
        placeholder="Enter email"
        fullWidth
        required
      />
      <StyledInputField
        variant="outlined"
        placeholder="Enter password"
        type="password"
        fullWidth
        required
      />
      <LoginButton type="submit" variant="contained" fullWidth>
        Log in
      </LoginButton>
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
