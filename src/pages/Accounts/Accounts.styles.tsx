import styled from 'styled-components';
import { Button, TextField, TextFieldProps, Avatar } from '@material-ui/core';

export const StyledHeader = styled.div`
  background-color: ${({ theme }) => theme.colors.neutral[200]};
  margin-top: -4px;
  & > div:first-child {
    padding: 52px 32px;
    max-width: 650px;
    margin: 0 auto;
    display: flex;
    position: relative;
    & > div:first-child {
      margin-right: 16px;
    }
  }
`;

export const StyledUsername = styled.div`
  display: flex;
  align-items: center;
  & > div:first-child {
    font-size: ${({ theme }) => theme.typeScale.header1};
    font-weight: 500;
    color: ${({ theme }) => theme.colors.blue[400]};
    margin-right: 10px;
    letter-spacing: 0.4px;
  }
  & > div:last-child {
    font-size: ${({ theme }) => theme.typeScale.subtitle};
    font-weight: 500;
    color: ${({ theme }) => theme.colors.neutral[550]};
    margin-top: 6px;
  }
`;

export const StyledToggleBtnContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.neutral[200]};
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.neutral[350]}`};
  & > div {
    padding: 0 32px;
    max-width: 530px;
    margin: 0 auto;
  }
`;

export const StyledToggleBtn = styled(Button)`
  && {
    background-color: ${({ theme }) => theme.colors.neutral[100]};
    text-transform: none;
    box-shadow: none;
    border: ${({ theme }) => `1px solid ${theme.colors.neutral[350]}`};
    border-bottom: 0;
    border-radius: 3px 3px 0 0;
    font-weight: 700;
    padding: 8px 20px;
    box-sizing: border-box;
    margin-bottom: -1px;
    color: ${({ theme }) => theme.colors.blue[400]};
    font-size: ${({ theme }) => theme.typeScale.paragraph};
    &:hover {
      box-shadow: none;
      background-color: ${({ theme }) => theme.colors.neutral[100]};
    }
  }
`;

export const StyledBody = styled.div`
  padding: 32px;
  width: 100%;
  max-width: 530px;
  display: flex;
  flex-direction: column;
  margin: auto;
  & > div:first-child {
    color: ${({ theme }) => theme.colors.blue[400]};
    font-size: ${({ theme }) => theme.typeScale.header3};
    margin: 28px 0 8px;
    font-weight: 500;
    margin-top: 40px;
  }
  & hr {
    margin-bottom: 16px;
  }
`;

export const StyledForm = styled.form`
  width: 355px;
`;

export const StyledInputLabel = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 12px;
  margin-top: 0;
  & > div:first-child {
    color: ${({ theme }) => theme.colors.blue[400]};
    font-weight: 600;
    padding-top: 16px;
  }
`;

export const StyledPublicLabel = styled.div`
  padding-top: 16px;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: ${({ theme }) => theme.typeScale.subtitle};
  color: ${({ theme }) => theme.colors.neutral[550]};
  & svg {
    margin-right: 4px;
    font-size: ${({ theme }) => theme.typeScale.paragraph};
  }
`;

export const StyledInputField = styled(TextField)<TextFieldProps>`
  & > div {
    padding: 0;
  }

  & fieldset {
    border: none;
  }
  & input:hover {
    background-color: ${({ theme }) => theme.colors.neutral[250]};
  }
  & input,
  textarea {
    background-color: ${({ theme }) => theme.colors.neutral[200]};
    color: ${({ theme }) => theme.colors.blue[400]};
    padding: 8px 12px;
    border: 2px solid ${({ theme }) => theme.colors.neutral[300]};
    border-radius: 3px;
    transition: background-color 200ms ease-in-out,
      border-color 200ms ease-in-out;

    &:focus {
      background-color: ${({ theme }) => theme.colors.neutral[100]};
      border: 2px solid ${({ theme }) => theme.colors.blue[100]};
    }
  }
`;

export const StyledSubmitButton = styled(Button)`
  && {
    color: ${({ theme }) => theme.colors.neutral[100]};
    box-shadow: none;
    transition: none;
    background-color: ${({ theme }) => theme.colors.green[100]};
    text-transform: none;
    font-size: ${({ theme }) => theme.typeScale.paragraph};
    font-weight: 400;
    margin: 40px 0 8px;
    &:hover {
      background-color: ${({ theme }) => theme.colors.green[200]};
      box-shadow: none;
    }
  }
`;

export const StyledAvatar = styled(Avatar)`
  && {
    height: 48px;
    width: 48px;
    font-weight: 500;
    background-color: ${({ theme }) => theme.colors.red[200]};
    font-size: ${({ theme }) => theme.typeScale.paragraph};
    &:hover {
      cursor: pointer;
    }
  }
`;
