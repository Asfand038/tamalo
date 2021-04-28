import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
// import { ReactQueryDevtools } from 'react-query/devtools';
import { AuthProvider } from './contexts';

import App from './App';

const client = new QueryClient();

ReactDOM.render(
  <BrowserRouter>
    <QueryClientProvider client={client}>
      <AuthProvider>
        <App />
      </AuthProvider>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
