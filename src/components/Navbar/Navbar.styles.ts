import styled from 'styled-components';
import { Toolbar, Button, Avatar } from '@material-ui/core';

export const StyledNavbar = styled(Toolbar)`
  && {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.colors.blue[200]};
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 0;
    max-height: 40px;
    height: 40px;
    padding: 0 4px;
    .d-flex {
      display: flex;
      align-items: center;
    }
    & * {
      box-sizing: border-box;
    }
  }
`;

interface SearchFieldProps {
  searchFocus: boolean;
}

export const StyledSearchField = styled.div<SearchFieldProps>`
  display: flex;
  height: 32px;
  background-color: ${({ theme, searchFocus }) =>
    searchFocus ? theme.colors.neutral[100] : theme.colors.transparency[300]};
  border-radius: 4px;
  padding: 2px 2px 2px 6px;
  width: ${({ searchFocus }) => (searchFocus ? '280px' : '184px')};
  transition: width 150ms ease-in;
  &:hover {
    background-color: ${({ theme, searchFocus }) =>
      searchFocus ? theme.colors.neutral[100] : theme.colors.transparency[500]};
  }
  & > div:first-child {
    width: 100%;
    input {
      padding: 0;
      &::placeholder {
        color: ${({ theme, searchFocus }) =>
          searchFocus ? theme.colors.neutral[700] : theme.colors.neutral[100]};
        opacity: 1 !important;
      }
    }
  }
  svg {
    color: ${({ theme, searchFocus }) =>
      searchFocus ? theme.colors.neutral[700] : theme.colors.neutral[100]};
    margin: auto 0;
    &:hover {
      cursor: ${({ searchFocus }) =>
        searchFocus ? 'pointer' : 'context-menu'};
    }
  }
`;

export const StyledNavBtn = styled(Button)`
  && {
    color: ${({ theme }) => theme.colors.neutral[100]};
    min-width: 0;
    width: 32px;
    height: 32px;
    padding: none;
    background-color: ${({ theme }) => theme.colors.transparency[300]};
    margin-right: 4px;
    text-transform: none;
    box-shadow: none;
    border-radius: 3px;
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
    font-size: ${({ theme }) => theme.typeScale.paragraph};
    font-weight: bold;
    & > span {
      & > span:last-child {
        padding-top: 2px;
      }
    }
  }
`;

export const AppLogo = styled(Button)`
  && {
    left: 46%;
    position: absolute;
    color: ${({ theme }) => theme.colors.transparency[400]};
    font-size: ${({ theme }) => theme.typeScale.header3};
    letter-spacing: 0;
    font-weight: bold;
    text-transform: none;
    font-family: ${({ theme }) => theme.fonts.logo};
    &:hover {
      background: none;
      color: ${({ theme }) => theme.colors.transparency[800]};
    }
    & span:last-child {
      padding-bottom: 3px;
      font-size: ${({ theme }) => theme.typeScale.header3};
    }
    svg {
      font-size: 24px;
    }
    & .MuiButton-startIcon {
      margin-right: 5px;
    }
  }
`;

interface IAvatar {
  width: string;
  height: string;
}

export const StyledAvatar = styled(Avatar)<IAvatar>`
  && {
    height: ${({ height }) => height};
    width: ${({ width }) => width};
    font-weight: 500;
    background-color: ${({ theme }) => theme.colors.red[200]};
    font-size: ${({ theme }) => theme.typeScale.paragraph};
    &:hover {
      cursor: pointer;
    }
  }
`;

export const StyledPopOverContent = styled.div`
  padding: 0 12px 12px;
  & hr {
    margin: 8px 0;
  }
`;

export const StyledUserInfo = styled.div`
  display: flex;
  & > div:first-child {
    margin: 4px 8px 4px 0;
  }
  & > div:last-child {
    line-height: 20px;
    & > div:first-child {
      margin-top: 4px;
      max-width: 230px;
      color: #172b4d;
    }
    & > div:last-child {
      font-size: 12px;
      color: #b3bac5;
      text-overflow: ellipsis;
      max-width: 230px;
    }
  }
`;

export const StyledPopOverButton = styled(Button)`
  && {
    text-transform: none;
    font-size: ${({ theme }) => theme.typeScale.paragraph};
    font-weight: 400;
    color: ${({ theme }) => theme.colors.blue[400]};
    padding: 6px 8px 6px 12px;
    margin: 0 -12px;
    width: -webkit-fill-available;
    border-radius: 0;
    justify-content: start;
  }
`;
