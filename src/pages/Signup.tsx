import React from 'react';
import styled from 'styled-components';

import { Divider } from '@material-ui/core';

import AuthLayout from '../layouts/AuthLayout/AuthLayout';
import { AuthTheme, typeScale } from '../layouts/AuthLayout/AuthTheme';
import AuthProviders from '../components/AuthProviders';
import {
  ButtonDesign,
  StyledInputField,
  StyledLink,
} from '../layouts/AuthLayout/AuthLayout.styles';

const StyledConfirmationText = styled.div`
  margin: 10px 0 20px;
  font-size: ${typeScale.helperText};
  color: ${AuthTheme.helperTextColor};
  line-height: 16px;
  text-align: left;
`;

/**
 * "&&" makes specificity of our styles
 * greater than material-ui styles
 */
const SignupButton = styled(ButtonDesign)`
  && {
    background-color: ${AuthTheme.signupBtnColor};
    :hover {
      background-color: ${AuthTheme.signupBtnHoverColor};
    }
  }
`;

const SignupForm: React.FC = () => {
  return (
    <AuthLayout>
      <div>Sign up for your account</div>
      <StyledInputField
        variant="outlined"
        placeholder="Enter email address"
        fullWidth
        required
      />
      <StyledInputField
        variant="outlined"
        placeholder="Enter full name"
        fullWidth
        required
      />
      <StyledInputField
        variant="outlined"
        placeholder="Create password"
        type="password"
        fullWidth
        required
      />
      <StyledConfirmationText>
        By signing up, I accept the{' '}
        <StyledLink href="#">Terms of Service</StyledLink> and acknowledge the{' '}
        <StyledLink href="#">Privacy Policy.</StyledLink>
      </StyledConfirmationText>
      <SignupButton type="submit" variant="contained" fullWidth>
        Sign up
      </SignupButton>
      <div className="login-method-separator">OR</div>
      <AuthProviders />
      <Divider className="authcard-divider" />
      <StyledLink href="#">Already have an account? Log In</StyledLink>
    </AuthLayout>
  );
};

export default SignupForm;
