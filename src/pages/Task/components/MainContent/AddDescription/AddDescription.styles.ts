import styled from 'styled-components';
import { TextField } from '@material-ui/core';

interface ITextField {
  editing: number;
}

export const StyledTextField = styled(TextField)<ITextField>`
  && {
    width: 100%;
    & > div {
      padding: 0;
      margin-left: 40px;
    }
    & fieldset {
      border: none;
    }
    & textarea {
      font-size: 14px;
      background-color: ${({ theme }) => theme.colors.darkness[40]};
      color: ${({ theme }) => theme.colors.blue[400]};
      padding: 10px 12px 8px 12px;
      border-radius: 3px;
      box-shadow: none;
      transition: background-color 200ms ease, box-shadow 200ms ease;
      cursor: ${({ editing }) => (editing ? 'text' : 'pointer')};
      &:hover {
        background-color: ${({ theme }) => theme.colors.darkness[50]};
      }
      &:focus {
        background-color: ${({ theme }) => theme.colors.neutral[100]};
        box-shadow: ${({ theme }) =>
          `inset 0 0 0 2px ${theme.colors.blue[100]}`};
      }
      &::placeholder {
        color: ${({ editing, theme }) =>
          editing ? 'inherit' : theme.colors.blue[400]};
        opacity: ${({ editing }) =>
          editing ? '0.8 !important' : '1 !important'};
      }
    }
  }
`;

export const StyledBtnWrapper = styled.div`
  margin-left: 40px;
`;
