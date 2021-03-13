import styled from 'styled-components';
import { Toolbar, Button, Avatar } from '@material-ui/core';

export const StyledNavbar = styled(Toolbar)`
  z-index: 5000;
  background-color: ${({ theme }) => theme.colors.blue[100]};
  display: flex;
  justify-content: space-between;
  max-height: 40px;
  padding: 0 4px;
  .d-flex {
    display: flex;
  }
`;

interface SearchFieldProps {
  searchFocus: boolean;
}

export const StyledSearchField = styled.div<SearchFieldProps>`
  display: flex;
  background-color: ${({ theme, searchFocus }) =>
    searchFocus ? theme.colors.neutral[100] : theme.colors.transparency[300]};
  border-radius: 4px;
  padding: 2px 2px 2px 6px;

  &:hover {
    background-color: ${({ theme, searchFocus }) =>
      searchFocus ? theme.colors.neutral[100] : theme.colors.transparency[500]};
  }
  input {
    color: inherit;
    width: ${({ searchFocus }) => (searchFocus ? '280px' : '184px')};
    transition: width 150ms ease-in;
    &::-webkit-input-placeholder {
      color: ${({ theme, searchFocus }) =>
        searchFocus ? theme.colors.neutral[600] : theme.colors.neutral[100]};
    }
  }
  svg {
    color: ${({ theme, searchFocus }) =>
      searchFocus ? theme.colors.neutral[600] : theme.colors.neutral[100]};
    margin: auto 0;
  }
`;

export const StyledNavBtn = styled(Button)`
  && {
    color: ${({ theme }) => theme.colors.neutral[100]};
    min-width: auto;
    background-color: ${({ theme }) => theme.colors.transparency[300]};
    margin-right: 4px;
    text-transform: none;
    box-shadow: none;
    &:hover {
      background-color: ${({ theme }) => theme.colors.transparency[200]};
      box-shadow: none;
    }
  }
`;

export const AppLogo = styled(Button)`
  && {
    position: absolute;
    margin: 0 50%;
    color: ${({ theme }) => theme.colors.transparency[400]};
    font-size: ${({ theme }) => theme.typeScale.header3};
    font-weight: bold;
    padding-bottom: 3px;
    text-transform: none;
    font-family: ${({ theme }) => theme.fonts.logo};
    &:hover {
      background: none;
      color: ${({ theme }) => theme.colors.neutral[100]};
    }
  }
`;

export const StyledAvatar = styled(Avatar)`
  && {
    background-color: ${({ theme }) => theme.colors.red[100]};
    font-size: large;
    &:hover {
      cursor: pointer;
    }
  }
`;
