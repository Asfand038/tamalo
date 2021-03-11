import styled from 'styled-components';
import { Toolbar, Button, Avatar } from '@material-ui/core';
import { logoFont, typeScale, transparency } from '../../styles';

export const StyledNavbar = styled(Toolbar)`
  background-color: ${({ theme }) => theme.navbarBackgroundColor};
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
    searchFocus ? theme.inputFieldBackground : transparency[300]};
  border-radius: 4px;
  padding: 2px 2px 2px 6px;

  &:hover {
    background-color: ${({ theme, searchFocus }) =>
      searchFocus ? theme.inputFieldBackground : transparency[500]};
  }
  input {
    color: inherit;
    width: ${({ searchFocus }) => (searchFocus ? '280px' : '184px')};
    transition: width 150ms ease-in;
    &::-webkit-input-placeholder {
      color: ${({ theme, searchFocus }) =>
        searchFocus ? theme.textColor : theme.textColorInverted};
    }
  }
  svg {
    color: ${({ theme, searchFocus }) =>
      searchFocus ? theme.textColor : theme.textColorInverted};
    margin: auto 0;
  }
`;

export const StyledNavBtn = styled(Button)`
  && {
    color: ${({ theme }) => theme.textColorInverted};
    min-width: auto;
    background-color: ${transparency[300]};
    margin-right: 4px;
    text-transform: none;
    box-shadow: none;
    &:hover {
      background-color: ${transparency[200]};
      box-shadow: none;
    }
  }
`;

export const AppLogo = styled(Button)`
  && {
    position: absolute;
    margin: 0 50%;
    color: ${transparency[400]};
    font-size: ${typeScale.header3};
    font-weight: bold;
    padding-bottom: 3px;
    text-transform: none;
    font-family: ${logoFont};
    &:hover {
      background: none;
      color: ${({ theme }) => theme.textColorInverted};
    }
  }
`;

export const StyledAvatar = styled(Avatar)`
  && {
    background-color: ${({ theme }) => theme.userLogoColor};
    font-size: large;
    &:hover {
      cursor: pointer;
    }
  }
`;
