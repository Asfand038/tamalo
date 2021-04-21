import styled from 'styled-components';
import {
  TextField,
  TextFieldProps,
  Button,
  IconButton,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Avatar,
} from '@material-ui/core';

export const StyledWrapper = styled.div`
  margin-top: 24px;
  & .d-flex {
    display: flex;
  }
`;

export const StyledAvatar = styled(Avatar)`
  && {
    height: 28px;
    width: 28px;
    display: inline-flex;
    background-color: ${({ theme }) => theme.colors.red[100]};
    font-size: ${({ theme }) => theme.typeScale.paragraph};
    &:hover {
      cursor: pointer;
    }
  }
`;

export const StyledAccordion = styled(Accordion)`
  &&& {
    flex: 1;
    border: none;
    transition: none;
    background-color: ${({ theme }) => theme.colors.neutral[100]};
    border-radius: 3px;
    margin: 0;
    margin-left: 14px;
    box-shadow: ${({ expanded, theme }) =>
      expanded
        ? `0 4px 8px -2px ${theme.colors.boxShadow}, 0 0 0 1px rgb(9 30 66 / 8%)`
        : `0 1px 2px -1px ${theme.colors.boxShadow}, 0 0 0 1px rgb(9 30 66 / 8%)`};
    &::before {
      content: none;
    }
    & > div:first-child {
      min-height: 0;
    }
  }
`;

export const StyledAccordionSummary = styled(AccordionSummary)`
  &&& {
    min-height: 0;
    transition: none;
    padding: 0;
    background-color: ${({ theme }) => theme.colors.neutral[100]};
    & > div:first-child {
      margin: 2px 0;
    }
  }
`;

export const StyledAccordionDetails = styled(AccordionDetails)`
  && {
    padding: 0;
    justify-content: space-between;
    margin: 12px 12px 8px;
  }
`;

export const StyledTextField = styled(TextField)<TextFieldProps>`
  && {
    width: -webkit-fill-available;
    & > div {
      padding: 8px 12px;
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

export const StyledIconButton = styled(IconButton)`
  && {
    height: 28px;
    width: 28px;
    border-radius: 3px;
    margin-left: 4px;
    &:hover {
      background-color: ${({ theme }) => theme.colors.darkness[100]};
    }
    & svg {
      color: ${({ theme }) => theme.colors.blue[300]};
    }
    & .sm-icon {
      height: 14px;
      width: 14px;
    }
    & .md-icon {
      height: 18px;
      width: 18px;
    }
  }
`;

export const StyledSaveButton = styled(Button)`
  && {
    color: ${({ theme }) => theme.colors.neutral[100]};
    background-color: ${({ theme }) => theme.colors.green[100]};
    font-weight: bold;
    box-shadow: none;
    transition: background-color 85ms ease;
    text-transform: none;
    font-size: ${({ theme }) => theme.typeScale.paragraph};
    font-weight: 400;
    height: 34px;
    width: 60px;
    min-width: 0px;
    &:hover {
      box-shadow: none;
      background-color: ${({ theme }) => theme.colors.green[200]};
    }
  }
`;

export const StyledIconBtnContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 -4px -5px 0;
`;
