import { Button, Paper, TextField, Link } from '@material-ui/core';

import styled from 'styled-components';
import { logoFont } from '../../styles';
import { typeScale, AuthTheme } from './AuthTheme';

export const StyledAuthForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  .authcard-divider {
    margin: 25px 0 20px;
  }
  .login-method-separator {
    font-size: ${typeScale.helperText};
    margin: 16px 0;
    color: ${AuthTheme.helperTextColor};
    font-weight: 300;
  }
`;

/**
 * && makes specificity of our styles
 * greater than material-ui styles
 */
export const StyledLink = styled(Link)`
  && {
    color: ${AuthTheme.linkColor};
  }
`;
export const StyledInputField = styled(TextField)`
  & fieldset {
    border: none;
  }
  & input {
    background-color: ${AuthTheme.inputFieldBackgroundColor};
    height: 44px;
    padding: 0 8px 0;
    margin: 0 0 1.2em;
    border: 2px solid ${AuthTheme.inputFieldBorderColor};
    border-radius: 3px;
    transition: background-color 200ms ease-in-out,
      border-color 200ms ease-in-out;
    :focus {
      background-color: ${AuthTheme.inputFieldBackgroundFocusColor};
      border: 2px solid ${AuthTheme.inputFieldBorderFocusColor};
    }
  }
`;

export const StyledAuthCard = styled(Paper)`
  padding: 25px 40px;
  width: 280px;
  margin: 20px auto;
  & > div:first-child {
    text-align: center;
    color: ${AuthTheme.authCardHeadingColor};
    font-weight: 900;
    font-size: ${typeScale.heading};
    line-height: 28px;
    margin-top: 10px;
    margin-bottom: 25px;
    word-spacing: 2px;
  }
`;

export const StyledLogo = styled.div`
  height: 43px;
  margin: 40px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  .logo-name {
    font-size: ${typeScale.logo};
    font-family: ${logoFont};
    font-weight: bolder;
    color: ${AuthTheme.appLogoTextColor};
  }
  .logo-icon {
    margin: 9px 10px 0 0;
    font-size: ${typeScale.logo};
    color: ${AuthTheme.appLogoIconColor};
  }
`;

export const ButtonDesign = styled(Button)`
  && {
    color: ${AuthTheme.textColorInverted};
    font-weight: bold;
    box-shadow: none;
    transition: none;
    &:hover {
      box-shadow: none;
    }
  }
`;
