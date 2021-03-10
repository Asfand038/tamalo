import styled from 'styled-components';
import { logoFont } from '../../styles';
import { typeScale, AuthTheme } from './AuthTheme';

interface AuthFormProps {
  formType: string;
}

export const StyledAuthForm = styled.div<AuthFormProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .auth-card {
    padding: 25px 40px;
    width: 280px;
    margin: 20px auto;

    .auth-card-heading {
      text-align: center;
      color: ${AuthTheme.authCardHeadingColor};
      font-weight: 900;
      font-size: ${typeScale.heading};
      line-height: 28px;
      margin-top: 10px;
      margin-bottom: 25px;
      word-spacing: 2px;
    }
    .input-field {
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
    }
    .submit-btn {
      background-color: ${({ formType }) =>
        formType === 'Log in'
          ? AuthTheme.loginBtnColor
          : AuthTheme.signupBtnColor};
      color: ${AuthTheme.textColorInverted};
      font-weight: bold;
      text-transform: none;
      box-shadow: none;
      transition: none;
      :hover {
        background-color: ${({ formType }) =>
          formType === 'Log in'
            ? AuthTheme.loginBtnHoverColor
            : AuthTheme.signupBtnHoverColor};
      }
    }
    .other-auth-options {
      text-align: center;
      font-size: ${typeScale.helperText};
      margin-top: 16px;
      margin-bottom: 16px;
      color: #4d4d4d;
      font-weight: 300;
    }
    .other-auth-option-btn {
      text-transform: none;
      color: rgba(0, 0, 0, 0.54);
      border-color: transparent;
      border-radius: 0;
      text-align: center;
      width: 99%;
      height: 39px;
      margin-bottom: 12px;
      box-shadow: rgb(0 0 0 / 20%) 1px 1px 5px 0;
      transition: all 200ms ease-in-out;
    }
    .form-link {
      margin-top: 10px;
      display: block;
      text-align: center;
      color: ${AuthTheme.linkColor};
    }
    .horizontal-line {
      margin: 25px 0 20px;
      height: 1px;
    }
    .form-link-group {
      text-align: center;
      a {
        color: ${AuthTheme.linkColor};
      }
      .separate-atag-icon {
        font-size: 8px;
        margin: 0 8px 0;
      }
    }
  }
`;

export const Logo = styled.div`
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
