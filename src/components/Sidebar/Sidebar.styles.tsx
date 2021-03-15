import { Accordion, Drawer, ListItem, List } from '@material-ui/core';
import styled from 'styled-components';

export const StyledSidebar = styled(Drawer)`
  height: 100%;
  padding: 0 16px;
  & > div {
    position: relative;
    width: 240px;
    overflow-y: unset;
    border: none;
  }
  & svg {
    color: ${({ theme }) => theme.colors.blue[300]};
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
    & > div:first-child {
      min-width: 0;
      svg {
        font-size: ${({ theme }) => theme.typeScale.header4};
        min-width: 40px;
      }
    }
    & div,
    span {
      font-weight: 700;
      color: ${({ theme }) => theme.colors.blue[300]};
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
  padding-left: 12px;
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
      height: 30px;
      margin-bottom: 5px;
      border-radius: 4px;
      padding-right: 0;
      & > div:first-child {
        min-width: 28px;
        margin-left: 28px;
      }
      & > div:nth-of-type(2) {
        color: ${({ theme }) => theme.colors.neutral[500]};
        & span {
          font-size: ${({ theme }) => theme.typeScale.subtitle};
        }
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
      font-size: ${({ theme }) => theme.typeScale.paragraph};
      height: 16px;
      width: 16px;
    }
    & > div:first-child {
      padding: 0 2px 0 0;
      min-height: 0px;
      height: 30px;
      transition: none;
      & > div:first-child {
        margin: 0;
        display: flex;
        align-items: center;
        & > svg {
          min-width: 40px;
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
        padding: 15px 0 0 0;
      }
    }
  }
`;
