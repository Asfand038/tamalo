import React from 'react';
import styled from 'styled-components';

import { Divider } from '@material-ui/core';

import { AuthProviders } from '../components';
import {
  AuthLayout,
  ButtonStyle,
  StyledInputField,
  StyledLink,
} from '../layouts/AuthLayout';

const StyledConfirmationText = styled.div`
  margin: 10px 0 20px;
  font-size: ${({ theme }) => theme.typeScale.helperText};
  color: ${({ theme }) => theme.colors.neutral[400]};
  line-height: 16px;
  text-align: left;
`;

const SignupButton = styled(ButtonStyle)`
  && {
    background-color: ${({ theme }) => theme.colors.blue[400]};
    :hover {
      background-color: ${({ theme }) => theme.colors.blue[300]};
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
      <StyledLink href="/login">Already have an account? Log In</StyledLink>
    </AuthLayout>
  );
};

export default SignupForm;
