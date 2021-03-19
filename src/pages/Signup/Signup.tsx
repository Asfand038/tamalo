import React from 'react';

import { Divider } from '@material-ui/core';

import { AuthProviders } from '../../components';
import {
  AuthLayout,
  StyledInputField,
  StyledLink,
  StyledAuthCardTitle,
} from '../../layouts';
import { SignupButton, StyledConfirmationText } from './Signup.styles';

const SignupPage: React.FC = () => {
  return (
    <AuthLayout>
      <StyledAuthCardTitle>Sign up for your account</StyledAuthCardTitle>
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
        <StyledLink to="#">Terms of Service</StyledLink> and acknowledge the{' '}
        <StyledLink to="#">Privacy Policy.</StyledLink>
      </StyledConfirmationText>
      <SignupButton type="submit" variant="contained" fullWidth>
        Sign up
      </SignupButton>
      <div className="login-method-separator">OR</div>
      <AuthProviders />
      <Divider className="authcard-divider" />
      <StyledLink to="/login">Already have an account? Log In</StyledLink>
    </AuthLayout>
  );
};

export default SignupPage;
