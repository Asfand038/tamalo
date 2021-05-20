import styled from 'styled-components';
import { TextField, TextFieldProps } from '@material-ui/core';
import { ButtonStyle } from '../../layouts';

export const StyledConfirmationText = styled.div`
  margin: 10px 0 20px;
  font-size: ${({ theme }) => theme.typeScale.helperText};
  color: ${({ theme }) => theme.colors.neutral[400]};
  line-height: 16px;
  text-align: left;
`;

export const StyledSignupButton = styled(ButtonStyle)`
  && {
    background-color: ${({ theme }) => theme.colors.blue[400]};
    :hover {
      background-color: ${({ theme }) => theme.colors.blue[300]};
    }
  }
`;

export const StyledContinueButton = styled(ButtonStyle)`
  && {
    background-color: ${({ theme }) => theme.colors.green[100]};
    :hover {
      background-color: ${({ theme }) => theme.colors.green[200]};
    }
  }
`;

type IPasswordInput = TextFieldProps & {
  focused: boolean;
  strengthmetervisible: number;
};

export const StyledPasswordInput = styled(TextField)<IPasswordInput>`
  && {
    background-color: ${({ theme, focused }) =>
      focused ? theme.colors.neutral[100] : theme.colors.neutral[200]};
    height: 44px;
    border: 2px solid
      ${({ theme, focused }) =>
        focused ? theme.colors.blue[100] : theme.colors.neutral[300]};
    border-radius: 3px;
    margin: ${({ strengthmetervisible }) =>
      strengthmetervisible ? '0' : '0 0 1.2em'};
    width: 98.25%;
    transition: background-color 200ms ease-in-out,
      border-color 200ms ease-in-out;
    & > div {
      height: 100%;
      padding-right: 0;
    }
    & input {
      padding: 0 8px 0;
    }
    & fieldset {
      border: none;
    }
  }
`;
