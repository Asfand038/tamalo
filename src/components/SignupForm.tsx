import React from 'react';

import { TextField, Link } from '@material-ui/core';

import AuthLayout from '../layouts/AuthLayout/AuthLayout';

const;

const SignupForm: React.FC = () => {
  return (
    <AuthLayout formType="Sign up">
      <div className="auth-card-heading">Sign up for your account</div>
      <TextField
        className="input-field"
        variant="outlined"
        placeholder="Enter email address"
        fullWidth
        required
      />
      <TextField
        className="input-field"
        variant="outlined"
        placeholder="Enter full name"
        fullWidth
        required
      />
      <TextField
        className="input-field"
        variant="outlined"
        placeholder="Create password"
        type="password"
        fullWidth
        required
      />
      <div>
        By signing up, I accept the <Link href="#">Terms of Service</Link> and
        acknowledge the <Link href="#">Privacy Policy</Link>
      </div>
    </AuthLayout>
  );
};

export default SignupForm;
