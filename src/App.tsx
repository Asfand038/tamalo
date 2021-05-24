import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Switch, Route, Redirect } from 'react-router-dom';

import { GlobalStyle, defaultTheme } from './theme';
import { AuthenticatedRoute, ErrorBoundary } from './hoc';
import {
  LoginPage,
  SignupPage,
  DashboardPage,
  BoardPage,
  AccountsPage,
  NotFoundPage,
} from './pages';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ErrorBoundary>
        <GlobalStyle />
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignupPage} />
          <Route path="/not-found" component={NotFoundPage} />
          <AuthenticatedRoute>
            <Switch>
              <Route path="/boards" exact component={DashboardPage} />
              <Route path="/boards/:id" component={BoardPage} />
              <Route path="/accounts" component={AccountsPage} />
              <Redirect from="/" exact to="/boards" />
              <Redirect from="*" to="/not-found" />
            </Switch>
          </AuthenticatedRoute>
        </Switch>
      </ErrorBoundary>
    </ThemeProvider>
  );
};

export default App;
