import styled from 'styled-components';
import { Toolbar, Button, Divider, Avatar } from '@material-ui/core';

export const StyledNavbar = styled(Toolbar)`
  && {
    width: 100%;
    box-sizing: border-box;
    z-index: 5000;
    background-color: inherit;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 0;
    max-height: 40px;
    height: 40px;
    padding: 0 4px 0 8px;
    & .d-flex {
      display: flex;
    }
    & * {
      box-sizing: border-box;
    }
  }
`;

export const StyledDivider = styled(Divider)`
  && {
    background-color: ${({ theme }) => theme.colors.transparency[300]};
    margin: 8px 8px 8px 4px;
  }
`;

export const StyledAvatar = styled(Avatar)`
  && {
    height: 28px;
    width: 28px;
    margin: auto 8px auto 0;
    background-color: ${({ theme }) => theme.colors.red[100]};
    font-size: ${({ theme }) => theme.typeScale.paragraph};
    &:hover {
      cursor: pointer;
      opacity: 0.9;
    }
  }
`;

export const StyledNavBtn = styled(Button)`
  && {
    color: ${({ theme }) => theme.colors.neutral[100]};
    min-width: 0;
    width: 32px;
    height: 32px;
    padding: 0 12px;
    background-color: ${({ theme }) => theme.colors.transparency[300]};
    text-transform: none;
    box-shadow: none;
    border-radius: 3px;
    margin-right: 4px;
    font-size: ${({ theme }) => theme.typeScale.paragraph};
    font-weight: 400;
    &:hover {
      background-color: ${({ theme }) => theme.colors.transparency[200]};
      box-shadow: none;
    }
    svg {
      height: 20px;
      width: 20px;
      font-size: ${({ theme }) => theme.typeScale.paragraph};
    }
  }
`;

export const StyledBoardBtn = styled(StyledNavBtn)`
  && {
    width: auto;
    padding: 0 8px;
    & > span:first-child {
      & > span:first-child {
        margin: 0 0 3.1px -4px;
      }
      & > span:last-child {
        margin: 0 -4px 2px 0;
      }
    }
  }
`;

export const StyledBoardTitleBtn = styled(StyledNavBtn)`
  && {
    font-size: 18px;
    font-weight: 700;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: auto;
  }
`;

export const StyledBoardCategoryBtn = styled(StyledNavBtn)`
  && {
    width: auto;
    & > span {
      & > span:last-child {
        font-size: ${({ theme }) => theme.typeScale.subtitle};
        background: ${({ theme }) => theme.colors.transparency[200]};
        border-radius: 12px;
        margin-left: 8px;
        padding: 0 6px;
      }
    }
  }
`;

export const StyledIconOnLeftBtn = styled(StyledNavBtn)`
  && {
    width: auto;
    & > span {
      & > span:last-child {
        padding-top: 2px;
      }
    }
  }
`;

export const StyledInviteBtn = styled(StyledNavBtn)`
  && {
    width: auto;
  }
`;