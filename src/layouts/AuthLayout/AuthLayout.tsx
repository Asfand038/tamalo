import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Assignment as AssignmentIcon } from '@material-ui/icons';

import { AuthTheme } from './AuthTheme';
import { StyledWrapper, StyledLogo, StyledAuthCard } from './AuthLayout.styles';
import { AuthLeftBgImage, AuthRightBgImage } from '../../assets';

const AuthLayout: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={AuthTheme}>
      <StyledWrapper>
        <StyledLogo>
          <AssignmentIcon />
          <div>Tamalo</div>
        </StyledLogo>
        <AuthLeftBgImage />
        <AuthRightBgImage />
        <StyledAuthCard elevation={10}>{children}</StyledAuthCard>
      </StyledWrapper>
    </ThemeProvider>
  );
};

export default AuthLayout;
