import {
  Accordion,
  AccordionSummary,
  Drawer,
  ListItem,
  List,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import styled from 'styled-components';

export const StyledSidebar = styled(Drawer)`
  height: 100%;
  width: 240px;
  padding: 0 16px;
  position: sticky;
  top: 0;
  & > div {
    overflow-y: unset;
    border: none;
    width: 240px;
    padding: 0 16px;
    & > ul {
      margin-top: 42px;
      padding: 0;
    }
  }
  & svg {
    color: ${({ theme }) => theme.colors.blue[300]};
  }
  & .active-link {
    background-color: ${({ theme }) => theme.colors.blue[50]};
    &:hover {
      background-color: ${({ theme }) => theme.colors.blue[50]} !important;
    }
    & span,
    svg {
      color: ${({ theme }) => theme.colors.blue[100]} !important;
    }
  }
`;

export const StyledSidebarItem = styled(ListItem)`
  && {
    border-radius: 4px;
    height: 30px;
    margin-bottom: 5px;
    padding: 6px 8px 6px 0;
    transition: none;
    &:hover {
      background-color: ${({ theme }) => theme.colors.neutral[200]};
    }
    & div,
    span {
      font-weight: 700;
      color: ${({ theme }) => theme.colors.blue[300]};
    }
  }
`;

export const StyledSidebarIcon = styled(ListItemIcon)`
  && {
    min-width: 0;
    svg {
      font-size: ${({ theme }) => theme.typeScale.header4};
      min-width: 40px;
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
    #panel1bh-content {
      & > div {
        padding: 15px 0 0 0;
      }
    }
  }
`;

export const StyledAccordionSummary = styled(AccordionSummary)`
  &&& {
    padding: 0 2px 0 0;
    min-height: 0px;
    height: 30px;
    transition: none;
    &:hover {
      background-color: ${({ theme }) => theme.colors.neutral[200]};
      border-radius: 4px;
    }
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
  }
`;

export const StyledAccordionListItem = styled(ListItem)`
  &&& {
    height: 30px;
    margin-bottom: 5px;
    border-radius: 4px;
    padding-right: 0;
    & .forward-icon {
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
      .forward-icon {
        transform: translateX(0);
        opacity: 1;
      }
    }
  }
`;

export const StyledAccordionListIcon = styled(ListItemIcon)`
  && {
    min-width: 28px;
    margin-left: 28px;
  }
`;

export const StyledAccordionListText = styled(ListItemText)`
  && {
    color: ${({ theme }) => theme.colors.neutral[500]};
    & span {
      font-size: ${({ theme }) => theme.typeScale.subtitle};
    }
  }
`;
