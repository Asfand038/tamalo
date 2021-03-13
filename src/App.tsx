import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Switch, Route, Redirect } from 'react-router-dom';

import { GlobalStyle, defaultTheme } from './theme';
import { LoginPage, SignupPage, DashboardPage, BoardPage } from './pages';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Switch>
        <Route path="/login" exact component={LoginPage} />
        <Route path="/signup" exact component={SignupPage} />
        <Route path="/boards" exact component={DashboardPage} />
        <Route path="/boards/:id" component={BoardPage} />
        <Redirect from="/" to="/login" />
      </Switch>
    </ThemeProvider>
  );
};

export default App;
