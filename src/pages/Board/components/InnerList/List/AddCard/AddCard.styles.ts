import styled from 'styled-components';
import { Card, TextField, TextFieldProps } from '@material-ui/core';

// Styles for ClosedForm

export const StyledClosedFormContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  border-radius: 3px;
  height: 38px;
  color: inherit;
  background-color: inherit;
  & svg {
    color: ${({ theme }) => theme.colors.neutral[500]};
  }
`;

export const StyledOpenFormBtn = styled.div`
  display: flex;
  align-items: center;
  border-radius: 3px;
  color: ${({ theme }) => theme.colors.neutral[500]};
  flex-grow: 1;
  margin: 2px 0 8px 8px;
  padding: 4px 8px 4px 4px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.darkness[50]};
    color: ${({ theme }) => theme.colors.blue[400]};
  }
  & svg {
    color: ${({ theme }) => theme.colors.neutral[500]};
  }
  & > div {
    margin: 2px 0 0 2px;
  }
`;

export const StyledCreateFromTemplateBtn = styled.div`
  cursor: pointer;
  margin: 0 8px 6px 0;
  border-radius: 3px;
  display: flex;
  width: 28px;
  height: 28px;
  & svg {
    color: ${({ theme }) => theme.colors.neutral[500]};
    padding: 4px;
    height: 16px;
    width: 16px;
    margin: auto;
  }
  &:hover {
    background-color: ${({ theme }) => theme.colors.darkness[50]};
    svg {
      color: ${({ theme }) => theme.colors.blue[400]};
    }
  }
`;

// Styles for OpenedForm

export const StyledOpenedFormContainer = styled.div`
  margin-bottom: 8px;
`;

export const StyledCard = styled(Card)`
  margin: 0 8px;
`;

export const StyledTextArea = styled(TextField)<TextFieldProps>`
  && {
    background-color: ${({ theme }) => theme.colors.neutral[100]};
    border-radius: 3px;
    box-shadow: ${({ theme }) => `0 1px 0 ${theme.colors.boxShadow}`};
    width: 100%;
    min-height: 20px;
    position: relative;
    text-decoration: none;
    z-index: 0;
    border: none;
    & > div {
      padding: 8px 8px 28px;
      min-height: 54px;
      display: block;
    }
    & fieldset {
      border: none;
    }
    & textarea {
      color: ${({ theme }) => theme.colors.blue[400]};
      &::placeholder {
        color: ${({ theme }) => theme.colors.blue[400]} !important;
        opacity: 0.8 !important;
      }
    }
  }
`;

export const StyledOptionsIcon = styled.div`
  height: 32px;
  width: 32px;
  display: flex;
  border-radius: 3px;
  margin: 0 8px 0 auto;
  & svg {
    color: ${({ theme }) => theme.colors.neutral[500]};
    width: 25px;
    height: 25px;
    margin: auto;
  }
  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.darkness[50]};
    & svg {
      color: ${({ theme }) => theme.colors.blue[400]};
    }
  }
`;

export const StyledBtnWrapper = styled.div`
  margin-left: 8px;
`;
