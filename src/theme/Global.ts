import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';
import { defaultTheme } from './themes';

export const GlobalStyle = createGlobalStyle`
  ${normalize()}
  html, body, #root {
    height: 100%;   
    overflow: hidden;
  }
  html {
    box-sizing: border-box;
    font-size: 14px;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: ${defaultTheme.fonts.body};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
