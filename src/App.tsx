import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Switch, Route, Redirect } from 'react-router-dom';

import { GlobalStyle, defaultTheme } from './theme';
import { AuthenticatedRoute } from './contexts';
import { ErrorBoundary } from './hoc';
import {
  LoginPage,
  SignupPage,
  DashboardPage,
  BoardPage,
  AccountsPage,
} from './pages';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ErrorBoundary>
        <GlobalStyle />
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignupPage} />
          <AuthenticatedRoute>
            <Route path="/boards" exact component={DashboardPage} />
            <Route path="/boards/:id" component={BoardPage} />
            <Route path="/accounts" component={AccountsPage} />
          </AuthenticatedRoute>
          <Redirect from="/" to="/login" />
        </Switch>
      </ErrorBoundary>
    </ThemeProvider>
  );
};

export default App;
