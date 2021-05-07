import styled from 'styled-components';
import { Button, TextField, TextFieldProps } from '@material-ui/core';

export const StyledWrapper = styled.div`
  padding: 0 12px 12px;
  min-height: 300px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
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
  & input {
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

export const StyledButton = styled(Button)`
  && {
    width: 100%;
    color: ${({ theme }) => theme.colors.neutral[100]};
    background-color: ${({ theme }) => theme.colors.green[100]};
    font-weight: bold;
    box-shadow: none;
    transition: background-color 85ms ease;
    text-transform: none;
    padding: 4px 14px;
    font-size: ${({ theme }) => theme.typeScale.paragraph};
    font-weight: 400;
    &:hover {
      box-shadow: none;
      background-color: ${({ theme }) => theme.colors.green[200]};
    }
  }
`;

export const StyledSearchResultsList = styled.div`
  background-color: #fafbfc;
  padding: 16px 12px;
  width: 280px;
  max-height: 188px;
  box-shadow: 0 8px 16px -4px rgb(9 30 66 / 25%), 0 0 0 1px rgb(9 30 66 / 8%);
  border-radius: 3px;
  box-sizing: border-box;
  overflow-y: auto;
  overflow-x: hidden;
  margin-top: 4px;
  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.darkness[100]};
    border: 5px solid transparent;
    background-clip: padding-box;
  }
  &::-webkit-scrollbar {
    width: 18px;
    background-color: inherit;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.darkness[100]};
    border: 5px solid transparent;
    background-clip: padding-box;
  }
`;

export const StyledMessage = styled.div`
  padding: 12px;
  color: #7a869a;
  text-align: center;
  padding: 8px 4px;
`;

export const LoaderWrapper = styled.div`
  && {
    position: relative;
    width: 100%;
    height: 48px;
    & > div:first-child {
      top: 34%;
      font-size: 4px;
      &::before {
        left: -6px;
      }
      &::after {
        left: 6px;
      }
    }
  }
`;

export const StyledUserContainer = styled(Button)`
  && {
    justify-content: flex-start;
    color: ${({ theme }) => theme.colors.blue[400]};
    font-weight: 400;
    border-radius: 3px;
    padding: 4px;
    text-transform: none;
    font-size: ${({ theme }) => theme.typeScale.paragraph};
    & div:first-of-type {
      margin-right: 12px;
    }
  }
`;
