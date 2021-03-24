import styled from 'styled-components';
import { TextField, TextFieldProps } from '@material-ui/core';

export const Container = styled.div`
  box-sizing: border-box;
  padding-right: 4px;
  margin: 14px 4px 0 0;
  background-color: ${({ theme }) => theme.colors.neutral[250]};
  border-radius: 3px;
  width: 272px;
  display: flex;
  flex-direction: column;
  height: fit-content;
  flex-shrink: 0;
`;

export const ListTitle = styled.div`
  padding: 8px;
  color: ${({ theme }) => theme.colors.blue[400]};
  font-weight: 600;
`;

export const ListTitleInput = styled(TextField)<TextFieldProps>`
  padding: 8px;
  color: ${({ theme }) => theme.colors.blue[400]};
  font-weight: 600;
  border: none;
  width: 100%;
  & > div {
    padding: 8px 0 8px 8px;
    & textarea {
      border-radius: 3px;
      padding: 7px 8px 4px;
      box-sizing: border-box;
      color: ${({ theme }) => theme.colors.blue[400]};
      font-weight: 600;
      min-height: 28px;
      &:focus {
        background-color: ${({ theme }) => theme.colors.neutral[100]};
        box-shadow: ${({ theme }) =>
          `inset 0 0 0 2px ${theme.colors.blue[100]}`};
      }
    }
  }
  & fieldset {
    border: none;
  }
`;

export const TaskList = styled.div`
  padding: 0 8px;
  flex-grow: 1;
  max-height: 442px;
  overflow-y: auto;
  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.darkness[100]};
  }
  &::-webkit-scrollbar {
    width: 8px;
    background-color: ${({ theme }) => theme.colors.neutral[200]};
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.darkness[100]};
  }
`;

export const StyledListTitle = styled.div`
  display: flex;
  justify-content: space-between;
  & > span {
    margin: 6px 3px 0 0;
    height: 20px;
    width: 20px;
    padding: 6px;
    cursor: pointer;
    border-radius: 3px;
    &:hover {
      background-color: ${({ theme }) => theme.colors.darkness[50]};
    }
    svg {
      color: ${({ theme }) => theme.colors.neutral[500]};
    }
  }
`;
