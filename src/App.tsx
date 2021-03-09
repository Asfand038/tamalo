import React from 'react';
import { createGlobalStyle } from 'styled-components';

import Navbar from './components/Navbar/Navbar';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

const App: React.FC = () => (
  <div>
    <GlobalStyle />
    <Navbar />
  </div>
);

export default App;
