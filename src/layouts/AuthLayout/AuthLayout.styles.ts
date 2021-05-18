import { Button, Paper, TextField, TextFieldProps } from '@material-ui/core';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  .authcard-divider {
    margin: 25px 0 20px;
  }
  .login-method-separator {
    font-size: ${({ theme }) => theme.typeScale.helperText};
    margin: 16px 0;
    color: ${({ theme }) => theme.colors.neutral[400]};
    font-weight: 300;
  }
`;

export const StyledLink = styled(Link)`
  && {
    color: ${({ theme }) => theme.colors.blue[400]};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const StyledInputField = styled(TextField)<TextFieldProps>`
  & fieldset {
    border: none;
  }
  & input {
    background-color: ${({ theme }) => theme.colors.neutral[200]};
    height: 44px;
    padding: 0 8px 0;
    margin: 0 0 1.2em;
    border: 2px solid ${({ theme }) => theme.colors.neutral[300]};
    border-radius: 3px;
    transition: background-color 200ms ease-in-out,
      border-color 200ms ease-in-out;
    :focus {
      background-color: ${({ theme }) => theme.colors.neutral[100]};
      border: 2px solid ${({ theme }) => theme.colors.blue[100]};
    }
  }
`;

export const StyledAuthCard = styled(Paper)`
  padding: 25px 40px;
  width: 280px;
  margin: 20px auto;
`;

export const StyledAuthCardTitle = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.colors.neutral[400]};
  font-weight: 900;
  font-size: ${({ theme }) => theme.typeScale.heading};
  margin-top: 10px;
  margin-bottom: 25px;
  word-spacing: 2px;
`;

export const StyledLogo = styled.div`
  height: 43px;
  margin: 40px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    font-size: ${({ theme }) => theme.typeScale.logo};
    font-family: ${({ theme }) => theme.fonts.logo};
    font-weight: bolder;
    color: ${({ theme }) => theme.colors.blue[500]};
  }
  svg {
    margin: 9px 10px 0 0;
    font-size: ${({ theme }) => theme.typeScale.logo};
    color: ${({ theme }) => theme.colors.blue[200]};
  }
`;

export const ButtonStyle = styled(Button)`
  && {
    color: ${({ theme }) => theme.colors.neutral[100]};
    font-weight: bold;
    box-shadow: none;
    transition: none;
    &:hover {
      box-shadow: none;
    }
  }
`;

export const StyledErrorMessage = styled.div`
  text-align: left;
  & > p {
    background-color: ${({ theme }) => theme.colors.red[100]};
    color: ${({ theme }) => theme.colors.red[50]};
    font-size: ${({ theme }) => theme.typeScale.heading};
    line-height: 1.33;
    border-radius: 4px;
    border: ${({ theme }) => `1px solid ${theme.colors.red[100]}`};
    display: inline-block;
    padding: 0.5em 1em;
    text-align: left;
  }
`;
