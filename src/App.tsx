import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle, defaultTheme } from './styles';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
// import Navbar from './components/Navbar/Navbar';
// import HomePage from './pages/Home/Home';

const App: React.FC = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <button onClick={() => setShowLogin(!showLogin)}>Toggle Form</button>
      {/* <Navbar />
    <HomePage /> */}
      {showLogin ? <LoginForm /> : <SignupForm />}
    </ThemeProvider>
  );
};

export default App;
