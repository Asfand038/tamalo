import React from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle, defaultTheme } from './styles';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
