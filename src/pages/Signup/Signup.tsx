import React, { useState, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { Redirect } from 'react-router-dom';
import { Divider, InputAdornment, IconButton } from '@material-ui/core';
import {
  Visibility as VisibilityIcon,
  VisibilityOff as VisibilityOffIcon,
} from '@material-ui/icons';

import { AuthProviders, Loader } from '../../components';
import { getAppIcon } from '../../utils';
import { useAuth } from '../../contexts';
import {
  AuthLayout,
  StyledInputField,
  StyledLink,
  StyledAuthCardTitle,
  StyledErrorMessage,
} from '../../layouts';
import {
  StyledSignupButton,
  StyledContinueButton,
  StyledConfirmationText,
  StyledPasswordInput,
} from './Signup.styles';

const SignupPage: React.FC = () => {
  const { isLoggedIn, isLoading, signup, error } = useAuth();

  const [disableContinueBtn, setDisableContinueBtn] = useState(true);
  const [emailConfirmed, setEmailConfirmed] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const firstNameRef = useRef<HTMLInputElement | null>(null);
  const lastNameRef = useRef<HTMLInputElement | null>(null);
  const usernameRef = useRef<HTMLInputElement | null>(null);

  const validateEmail = (email: string) => {
    const re = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    return re.test(String(email).toLowerCase());
  };

  const validateEmailHandler = () => {
    const isValid = validateEmail(emailRef.current!.value);
    setDisableContinueBtn(!isValid);
  };

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    signup(
      emailRef.current!.value,
      firstNameRef.current!.value,
      lastNameRef.current!.value,
      usernameRef.current!.value,
      passwordRef.current!.value
    );
  };

  return (
    <>
      <Helmet>
        <title>Signup | Tamalo</title>
        <link rel="icon" href={getAppIcon()} />
      </Helmet>
      {isLoading && <Loader color="#e1e1e1" />}
      {!isLoading && (
        <AuthLayout>
          {isLoggedIn && <Redirect to="/boards" />}
          {error.length > 0 && (
            <StyledErrorMessage>
              <p>{error}</p>
            </StyledErrorMessage>
          )}
          <StyledAuthCardTitle>Sign up for your account</StyledAuthCardTitle>
          <StyledInputField
            inputRef={emailRef}
            variant="outlined"
            placeholder="Enter email address"
            fullWidth
            required
            onKeyUp={validateEmailHandler}
            invisible={+emailConfirmed}
          />
          <form onSubmit={submitHandler}>
            {emailConfirmed && (
              <>
                <StyledInputField
                  inputRef={firstNameRef}
                  variant="outlined"
                  placeholder="Enter first name"
                  fullWidth
                  required
                />
                <StyledInputField
                  inputRef={lastNameRef}
                  variant="outlined"
                  placeholder="Enter last name"
                  fullWidth
                  required
                />
                <StyledInputField
                  inputRef={usernameRef}
                  variant="outlined"
                  placeholder="Enter username"
                  fullWidth
                  required
                />
                <StyledPasswordInput
                  inputRef={passwordRef}
                  focused={passwordFocus}
                  variant="outlined"
                  placeholder="Create password"
                  type={showPassword ? 'text' : 'password'}
                  fullWidth
                  required
                  onFocus={() => setPasswordFocus(true)}
                  onBlur={() => setPasswordFocus(false)}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <VisibilityIcon />
                          ) : (
                            <VisibilityOffIcon />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </>
            )}
            <StyledConfirmationText>
              By signing up, I accept the{' '}
              <StyledLink to="#">Terms of Service</StyledLink> and acknowledge
              the <StyledLink to="#">Privacy Policy.</StyledLink>
            </StyledConfirmationText>
            {emailConfirmed && (
              <StyledSignupButton type="submit" variant="contained" fullWidth>
                Sign up
              </StyledSignupButton>
            )}
          </form>
          {!emailConfirmed && (
            <StyledContinueButton
              variant="contained"
              fullWidth
              disabled={disableContinueBtn}
              onClick={() => setEmailConfirmed(true)}
            >
              Continue
            </StyledContinueButton>
          )}
          <div className="login-method-separator">OR</div>
          <AuthProviders />
          <Divider className="authcard-divider" />
          <StyledLink to="/login">Already have an account? Log In</StyledLink>
        </AuthLayout>
      )}
    </>
  );
};

export default SignupPage;
