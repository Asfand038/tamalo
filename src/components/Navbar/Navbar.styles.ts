import styled from 'styled-components';
import Toolbar from '@material-ui/core/Toolbar';
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
  .nav-btn {
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
  .user-logo {
    background-color: ${({ theme }) => theme.userLogoColor};
    font-size: large;
    &:hover {
      cursor: pointer;
    }
  }
`;

interface SearchFieldProps {
  searchFocus: boolean;
}

export const SearchField = styled.div<SearchFieldProps>`
  display: flex;
  background-color: ${({ theme, searchFocus }) =>
    searchFocus ? theme.inputFieldBackground : transparency[300]};
  border-radius: 4px;
  padding: 2px 2px 2px 6px;

  &:hover {
    background-color: ${({ theme, searchFocus }) =>
      searchFocus ? theme.inputFieldBackground : transparency[500]};
  }
  .search-input input {
    color: inherit;
    width: ${({ searchFocus }) => (searchFocus ? '280px' : '184px')};
    transition: width 150ms ease-in;
    &::-webkit-input-placeholder {
      color: ${({ theme, searchFocus }) =>
        searchFocus ? theme.textColor : theme.textColorInverted};
    }
  }
  .search-icon {
    color: ${({ theme, searchFocus }) =>
      searchFocus ? theme.textColor : theme.textColorInverted};
    margin: auto 0;
  }
`;

export const AppLogo = styled.div`
  position: absolute;
  margin: 0 50%;
  .logo-btn {
    color: ${transparency[400]};
    &:hover {
      background: none;
      color: ${({ theme }) => theme.textColorInverted};
    }
  }
  .logo-name {
    font-size: ${typeScale.header3};
    font-weight: bold;
    padding-bottom: 3px;
    text-transform: none;
    font-family: ${logoFont};
  }
`;
