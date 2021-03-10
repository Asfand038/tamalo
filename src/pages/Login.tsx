import React from 'react';
import styled from 'styled-components';

import { Divider } from '@material-ui/core';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

import AuthLayout from '../layouts/AuthLayout/AuthLayout';
import AuthProviders from '../components/AuthProviders';
import { AuthTheme } from '../layouts/AuthLayout/AuthTheme';
import {
  ButtonDesign,
  StyledInputField,
  StyledLink,
} from '../layouts/AuthLayout/AuthLayout.styles';

/**
 * && makes specificity of our styles
 * greater than material-ui styles
 */
const LoginButton = styled(ButtonDesign)`
  && {
    background-color: ${AuthTheme.loginBtnColor};
    :hover {
      background-color: ${AuthTheme.loginBtnHoverColor};
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
      <StyledLink href="#">Sign up for an account</StyledLink>
    </AuthLayout>
  );
};

export default LoginForm;
