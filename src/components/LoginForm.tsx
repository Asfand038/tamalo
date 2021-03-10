import React from 'react';

import { TextField } from '@material-ui/core';

import AuthLayout from '../layouts/AuthLayout/AuthLayout';

const LoginForm: React.FC = () => {
  return (
    <AuthLayout formType="Log in">
      <div className="auth-card-heading">Log in to Tamalo</div>
      <TextField
        className="input-field"
        variant="outlined"
        placeholder="Enter email"
        fullWidth
        required
      />
      <TextField
        className="input-field"
        variant="outlined"
        placeholder="Enter password"
        type="password"
        fullWidth
        required
      />
    </AuthLayout>
  );
};

export default LoginForm;
