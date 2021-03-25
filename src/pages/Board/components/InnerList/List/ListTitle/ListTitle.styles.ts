import styled from 'styled-components';
import { TextField, TextFieldProps } from '@material-ui/core';

export const StyledListTitleWrapper = styled.div`
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

export const StyledListTitle = styled.div`
  && {
    display: flex;
    align-items: center;
    width: 100%;
    min-height: 27px;
    padding: 9px 0 8px 16.5px;
    color: ${({ theme }) => theme.colors.blue[400]};
    font-weight: 600;
  }
`;

export const StyledListTitleInput = styled(TextField)<TextFieldProps>`
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
