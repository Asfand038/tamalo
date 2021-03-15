import { Accordion, Drawer, ListItem, List } from '@material-ui/core';
import styled from 'styled-components';

export const StyledSidebar = styled(Drawer)`
  height: 100%;
  & > div {
    position: relative;
    width: 240px;
    overflow-y: unset;
    border: none;
  }
`;

export const StyledSidebarItem = styled(ListItem)`
  && {
    border-radius: 4px;
    height: 30px;
    margin-bottom: 5px;
    padding: 6px 8px 6px 0;
    &:hover {
      background-color: ${({ theme }) => theme.colors.neutral[200]};
    }
    & div,
    span {
      font-weight: 700;
      color: ${({ theme }) => theme.colors.blue[300]};
    }
    svg {
      min-width: 32px;
      margin: 0 10px;
    }
  }
`;

export const StyledTeamList = styled.div`
  color: ${({ theme }) => theme.colors.neutral[400]};
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30px;
  margin-left: 10px;
  & button {
    border-radius: 4px;
    padding: 2px;
  }
`;

export const StyledAccordionList = styled(List)`
  && {
    width: 100%;
    padding: 0;
    & > div {
      font-size: ${({ theme }) => theme.typeScale.helperText};
      height: 30px;
      margin-bottom: 5px;
      border-radius: 4px;
      padding-right: 0;
      & > div:first-child {
        opacity: 0.8;
        min-width: 32px;
        margin: 0 10px;
      }
      & > div:nth-of-type(2) {
        opacity: 0.8;
      }
      & > div:nth-of-type(3) {
        min-width: 0;
        margin-right: 10px;
        transform: translateX(200%);
        opacity: 0;
        transition: transform 100ms ease, opacity 100ms ease;
        svg {
          height: 12px;
          width: 12px;
        }
      }
      &:hover {
        div:nth-of-type(3) {
          transform: translateX(0);
          opacity: 1;
        }
      }
    }
  }
`;

export const StyledAccordion = styled(Accordion)`
  &&& {
    border: none;
    box-shadow: none;
    transition: none;
    height: 30px;
    margin: 6px 0 0;
    color: ${({ theme }) => theme.colors.blue[300]};
    &::before {
      content: none;
    }
    & svg {
      color: ${({ theme }) => theme.colors.blue[300]};
    }
    & > div:first-child {
      padding: 0 2px 0 0;
      min-height: 0px;
      height: 30px;
      transition: none;
      & > div:first-child {
        margin: 0;
        & > svg {
          min-width: 32px;
          margin: 0 10px 0 5px;
        }
        & > p {
          font-weight: 700;
        }
      }
    }
    &:hover {
      background-color: ${({ theme }) => theme.colors.neutral[200]};
      border-radius: 4px;
    }
    #panel1bh-content {
      & > div {
        padding: 25px 0 0;
      }
    }
  }
`;
