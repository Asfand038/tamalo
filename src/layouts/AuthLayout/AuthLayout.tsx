import React from 'react';

import AssignmentIcon from '@material-ui/icons/Assignment';

import {
  StyledAuthForm,
  StyledLogo,
  StyledAuthCard,
} from './AuthLayout.styles';

const AuthLayout: React.FC = ({ children }) => {
  return (
    <StyledAuthForm>
      <StyledLogo>
        <AssignmentIcon className="logo-icon" />
        <div className="logo-name">Tamalo</div>
      </StyledLogo>
      <StyledAuthCard elevation={10}>{children}</StyledAuthCard>
    </StyledAuthForm>
  );
};

export default AuthLayout;
