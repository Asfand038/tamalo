import styled from 'styled-components';
import Toolbar from '@material-ui/core/Toolbar';

export const StyledNavbar = styled(Toolbar)`
  background-color: #026aa7;
  display: flex;
  justify-content: space-between;
  max-height: 40px;
  padding: 0 4px;
  .d-flex {
    display: flex;
  }
  .nav-btn {
    color: white;
    min-width: auto;
    background-color: hsla(0, 0%, 100%, 0.3);
    margin-right: 4px;
    text-transform: none;
    box-shadow: none;
    &:hover {
      background-color: hsla(0, 0%, 100%, 0.2);
      box-shadow: none;
    }
  }
  .user-logo {
    background-color: #ff4500;
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
  background-color: ${({ searchFocus }) =>
    searchFocus ? 'white' : 'hsla(0, 0%, 100%, 0.3)'};
  border-radius: 4px;
  padding: 2px 2px 2px 6px;

  &:hover {
    background-color: ${({ searchFocus }) =>
      searchFocus ? 'white' : 'hsla(0, 0%, 100%, 0.5)'};
  }
  .search-input input {
    color: inherit;
    width: ${({ searchFocus }) => (searchFocus ? '280px' : '184px')};
    transition: width 150ms ease-in;
    &::-webkit-input-placeholder {
      color: ${({ searchFocus }) => (searchFocus ? 'black' : 'white')};
    }
  }
  .search-icon {
    color: ${({ searchFocus }) => (searchFocus ? 'black' : 'white')};
    height: ${({ searchFocus }) => (searchFocus ? '0.8em' : '1em')};
    margin: auto 0;
  }
`;

export const AppLogo = styled.div`
  position: absolute;
  margin: 0 50%;
  .logo-btn {
    color: hsla(0, 0%, 100%, 0.4);
    &:hover {
      background: none;
      color: white;
    }
  }
  .logo-icon {
    font-size: 30px;
  }
  .logo-name {
    font-size: 1.4rem;
    font-weight: bold;
    padding-bottom: 3px;
    text-transform: capitalize;
    font-family: 'Noto Sans JP', 'Roboto', sans-serif;
  }
`;
