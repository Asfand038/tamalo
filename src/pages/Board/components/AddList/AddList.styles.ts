import styled from 'styled-components';
import { Collapse, TextField, TextFieldProps, Card } from '@material-ui/core';

export const StyledCollapse = styled(Collapse)`
  && {
    margin-top: -54px;
  }
`;

export const StyledOpenFormBtn = styled.div`
  z-index: 1000;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.transparency[200]};
  cursor: pointer;
  border-radius: 3px;
  height: fit-content;
  min-height: 32px;
  padding: 4px;
  margin: 14px 4px 0 8px;
  transition: background-color 85ms ease-in, opacity 40ms ease-in,
    border-color 85ms ease-in;
  color: ${({ theme }) => theme.colors.neutral[100]};
  width: 272px;
  flex-shrink: 0;
  &:hover {
    background-color: ${({ theme }) => theme.colors.transparency[300]};
  }
  & svg {
    color: ${({ theme }) => theme.colors.neutral[100]};
  }
  & > div {
    margin: 2px 0 0 2px;
  }
`;

// Styles for AddListForm

export const StyledAddListContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.neutral[250]};
  border-radius: 3px;
  height: fit-content;
  margin: 14px 4px 0 8px;
  min-height: 32px;
  width: 272px;
  padding: 4px;
  flex-shrink: 0;
  z-index: 2000;
`;

export const StyledCard = styled(Card)`
  && {
    box-shadow: none;
  }
`;

export const StyledListTitleInput = styled(TextField)<TextFieldProps>`
  && {
    width: 100%;
    & fieldset {
      border: none;
    }
    & input {
      background-color: ${({ theme }) => theme.colors.neutral[100]};
      color: ${({ theme }) => theme.colors.blue[400]};
      box-shadow: ${({ theme }) => `inset 0 0 0 2px ${theme.colors.blue[100]}`};
      padding: 8px 12px;
      border-radius: 3px;
      transition: background-color 200ms ease-in-out,
        border-color 200ms ease-in-out;
      &::placeholder {
        opacity: 0.8 !important;
        color: ${({ theme }) => theme.colors.blue[400]};
      }
    }
  }
`;

// Styles for ClosedForm
