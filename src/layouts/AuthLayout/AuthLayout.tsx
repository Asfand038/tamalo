import React from 'react';

import { Paper, Divider, Button, Link } from '@material-ui/core';

import AssignmentIcon from '@material-ui/icons/Assignment';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

import { StyledAuthForm, Logo } from './AuthLayout.styles';

interface Props {
  formType: string;
}

const AuthLayout: React.FC<Props> = ({ children, formType }) => {
  return (
    <StyledAuthForm formType={formType}>
      <Logo>
        <AssignmentIcon className="logo-icon" />
        <div className="logo-name">Tamalo</div>
      </Logo>
      <Paper elevation={10} className="auth-card">
        {children}
        <Button
          type="submit"
          variant="contained"
          fullWidth
          className="submit-btn"
        >
          {formType}
        </Button>
        <div className="other-auth-options">OR</div>
        <Button className="other-auth-option-btn" variant="outlined" fullWidth>
          Continue with Google
        </Button>
        <Button className="other-auth-option-btn" variant="outlined" fullWidth>
          Continue with Microsoft
        </Button>
        <Button className="other-auth-option-btn" variant="outlined" fullWidth>
          Continue with Apple
        </Button>
        <Link href="#" className="form-link">
          Login with SSO
        </Link>
        <Divider className="horizontal-line" />
        <div className="form-link-group">
          <Link href="#">Can&apos;t log in?</Link>
          <FiberManualRecordIcon className="separate-atag-icon" />
          <Link href="#">Sign up for an account</Link>
        </div>
      </Paper>
    </StyledAuthForm>
  );
};

export default AuthLayout;
