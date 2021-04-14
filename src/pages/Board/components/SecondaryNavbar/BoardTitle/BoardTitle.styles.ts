import styled from 'styled-components';
import { TextField, TextFieldProps } from '@material-ui/core';

export const StyledListTitleInput = styled(TextField)<TextFieldProps>`
  && {
    max-width: 100px;
    height: 32px;
    margin-right: 4px;
    & div:first-child {
      height: 100%;
    }
    & fieldset {
      border: none;
    }
    & input {
      height: 100%;
      background-color: ${({ theme }) => theme.colors.transparency[300]};
      color: ${({ theme }) => theme.colors.neutral[100]};
      font-size: 18px;
      font-weight: 700;
      padding: 0 12px;
      border-radius: 3px;
      transition: background-color 200ms ease-in-out,
        border-color 200ms ease-in-out;
      &:focus {
        color: ${({ theme }) => theme.colors.blue[400]};
        background-color: ${({ theme }) => theme.colors.neutral[100]};
        box-shadow: ${({ theme }) =>
          `inset 0 0 0 2px ${theme.colors.blue[100]}`};
      }
    }
  }
`;

export const StyledInput = styled.input`
  min-width: 24px;
  border: none;
  margin-right: 4px;
  background-color: ${({ theme }) => theme.colors.transparency[300]};
  color: ${({ theme }) => theme.colors.neutral[100]};
  font-size: 18px;
  font-weight: 700;
  padding: 0 12px;
  border-radius: 3px;
  transition: background-color 200ms ease-in-out, border-color 200ms ease-in-out;
  &:focus {
    outline: none;
    color: ${({ theme }) => theme.colors.blue[400]};
    background-color: ${({ theme }) => theme.colors.neutral[100]};
    box-shadow: ${({ theme }) => `inset 0 0 0 2px ${theme.colors.blue[100]}`};
  }
`;

export const StyledLabel = styled.label``;
