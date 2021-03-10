import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';
import { primaryFont } from './typography';

export const GlobalStyle = createGlobalStyle`
  ${normalize()}
  html {
    box-sizing: border-box;
    font-size: 14px;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: ${primaryFont};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
