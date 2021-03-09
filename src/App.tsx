import React from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle, defaultTheme } from './styles';
import Navbar from './components/Navbar/Navbar';

const App: React.FC = () => (
  <ThemeProvider theme={defaultTheme}>
    <GlobalStyle />
    <Navbar />
  </ThemeProvider>
);

export default App;
