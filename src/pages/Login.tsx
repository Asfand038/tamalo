import React from 'react';
import styled from 'styled-components';

import { Divider } from '@material-ui/core';
import { FiberManualRecord as FiberManualRecordIcon } from '@material-ui/icons';

import { AuthProviders } from '../components';
import {
  AuthLayout,
  ButtonStyle,
  StyledInputField,
  StyledLink,
} from '../layouts/AuthLayout';

const LoginButton = styled(ButtonStyle)`
  && {
    background-color: ${({ theme }) => theme.colors.green[100]};
    :hover {
      background-color: ${({ theme }) => theme.colors.green[200]};
    }
  }
`;
const StyledSSOLink = styled(StyledLink)`
  && {
    margin-top: 10px;
    display: block;
  }
`;
const StyledIcon = styled(FiberManualRecordIcon)`
  && {
    font-size: 8px;
    margin: 0 8px 0;
  }
`;

const LoginForm: React.FC = () => {
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
      <StyledSSOLink href="#">Login with SSO</StyledSSOLink>
      <Divider className="authcard-divider" />
      <StyledLink href="#">Can&apos;t log in?</StyledLink>
      <StyledIcon />
      <StyledLink href="/signup">Sign up for an account</StyledLink>
    </AuthLayout>
  );
};

export default LoginForm;
