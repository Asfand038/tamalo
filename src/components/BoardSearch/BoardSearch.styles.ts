import styled from 'styled-components';
import {
  IconButton,
  Accordion,
  AccordionSummary,
  Popover,
  Button,
} from '@material-ui/core';

import { StyledInputField } from '../../pages/Accounts/Accounts.styles';

export const StyledPopover = styled(Popover)<{ visible: number }>`
  && {
    display: ${({ visible }) => (visible ? 'block' : 'none')};
    inset: 6px 0 0 0 !important;
    & > div:nth-of-type(3) {
      overflow: hidden;
      box-shadow: 0 12px 24px -6px rgb(9 30 66 / 25%),
        0 0 0 1px rgb(9 30 66 / 8%);
    }
  }
`;

export const StyledPopoverContent = styled.div`
  width: 280px;
  max-height: 590px;
  background: ${({ theme }) => theme.colors.neutral[100]};
  overflow-x: hidden;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  padding: 8px 4px 8px 8px;
  &::-webkit-scrollbar-track {
    margin: 8px 0;
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
  & > div:first-child {
    position: relative;
    margin-bottom: 8px;
    display: flex;
    justify-content: space-between;
  }
`;

export const StyledCloseIconButton = styled(IconButton)`
  && {
    padding: 0;
    margin-right: 6px;
    & svg {
      font-size: 20px;
      color: ${({ theme }) => theme.colors.blue[300]};
    }
    &:hover {
      background-color: inherit;
      & svg {
        color: ${({ theme }) => theme.colors.blue[400]};
      }
    }
  }
`;

export const StyledSearchInput = styled(StyledInputField)`
  && {
    width: 88%;
    & input {
      &::placeholder {
        color: ${({ theme }) => theme.colors.blue[400]};
        opacity: 0.8 !important;
      }
    }
  }
`;

export const StyledAccordion = styled(Accordion)`
  &&& {
    border: none;
    box-shadow: none;
    transition: none;
    margin: 16px 0 8px;
    &::before {
      content: none;
    }
    & svg {
      color: ${({ theme }) => theme.colors.neutral[550]};
      font-size: ${({ theme }) => theme.typeScale.paragraph};
      height: 16px;
      width: 16px;
    }
    #panel1bh-content {
      & > div {
        padding: 0;
      }
    }
  }
`;

export const StyledAccordionSummary = styled(AccordionSummary)`
  &&& {
    pointer-events: none;
    padding: 0 2px 0 0;
    min-height: 0px;
    height: 20px;
    color: ${({ theme }) => theme.colors.neutral[550]};
    transition: none;
    margin-bottom: 8px;
    & svg {
      color: ${({ theme }) => theme.colors.neutral[550]};
      font-size: ${({ theme }) => theme.typeScale.paragraph};
      height: 16px;
      width: 16px;
    }
    & > div:first-child {
      display: flex;
      align-items: center;
      margin: 0 4px 0 8px;
      font-size: 12px;
      font-weight: 500;
      letter-spacing: 1px;
      & > svg {
        width: 16px;
        height: 16px;
        margin: 0 10px 2.6px 0;
      }
    }
    & div:last-child {
      padding: 20px 16px;
      & svg {
        pointer-events: auto;
        border-radius: 3px;
        width: 20px;
        height: 20px;
        margin-top: 3px;
        &:hover {
          color: ${({ theme }) => theme.colors.blue[400]};
          background-color: ${({ theme }) => theme.colors.darkness[50]};
        }
      }
    }
  }
`;

export const StyledBoardCard = styled.div`
  position: relative;
  cursor: pointer;
  box-sizing: border-box;
  width: 100%;
  border-radius: 3px;
  margin: 0 4px 4px 0;
  height: 36px;
  display: flex;
  font-weight: 700;
  height: 36px;
  overflow: hidden;
  color: ${({ theme }) => theme.colors.blue[400]};
  background-size: cover;
  background-position: 50%;
  background-image: url('https://images.unsplash.com/photo-1619233651146-7364c945c3ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw3MDY2fDB8MXxjb2xsZWN0aW9ufDF8MzE3MDk5fHx8fHwyfHwxNjE5NDkzMzI3&ixlib=rb-1.2.1&q=80&w=400');
  &::before {
    background: #fff;
    bottom: 0;
    content: '';
    left: 0;
    opacity: 0.8;
    position: absolute;
    right: 0;
    top: 0;
  }

  & > div:first-child {
    background-size: cover;
    z-index: 1;
    border-radius: 3px 0 0 3px;
    height: 36px;
    width: 36px;
    background-image: url('https://images.unsplash.com/photo-1619233651146-7364c945c3ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw3MDY2fDB8MXxjb2xsZWN0aW9ufDF8MzE3MDk5fHx8fHwyfHwxNjE5NDkzMzI3&ixlib=rb-1.2.1&q=80&w=400');
    background-position: 50%;
    opacity: 0.7;
  }
  & > div:nth-of-type(2) {
    position: relative;
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 9px 0 9px 10px;
    & > div {
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      max-width: 204px;
    }
    .animate-icon {
      margin-right: 6px;
      color: ${({ theme }) => theme.colors.blue[400]};
      height: 16px;
      width: 16px;
      transition: transform 85ms ease, height 150ms ease, width 150ms ease;
      transform: translateX(200%);
      &:hover {
        height: 20px;
        width: 20px;
      }
    }
  }
  &:hover {
    &::before {
      opacity: 0.7;
    }
    & > div:first-child {
      opacity: 1;
    }
    .animate-icon {
      transform: translateX(0) !important;
    }
  }
`;

export const StyledPlaceholderText = styled.div`
  padding: 16px 30px 14px 31px;
  color: #7a869a;
`;

export const StyledCreateNewBoardButton = styled(Button)`
  && {
    text-transform: none;
    color: ${({ theme }) => theme.colors.neutral[550]};
    font-size: ${({ theme }) => theme.typeScale.paragraph};
    text-decoration: underline;
    font-weight: 400;
    justify-content: flex-start;
    padding: 1px 12px;
    &:hover {
      background-color: inherit;
      color: ${({ theme }) => theme.colors.blue[400]};
      text-decoration: underline;
    }
  }
`;
