import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

import { AppleIcon, MicrosoftIcon, GoogleIcon } from '../assets';

const StyledButton = styled(Button)`
  && {
    text-transform: none;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.neutral[500]};
    font-weight: bold;
    border-color: transparent;
    border-radius: 0;
    text-align: center;
    height: 39px;
    margin-bottom: 12px;
    box-shadow: rgb(0 0 0 / 20%) 1px 1px 5px 0;
    svg {
      width: 18px;
      padding-bottom: 3px;
    }
  }
`;

const AuthProviders: React.FC = () => {
  return (
    <>
      <StyledButton variant="outlined" startIcon={<GoogleIcon />} fullWidth>
        Continue with Google
      </StyledButton>
      <StyledButton variant="outlined" startIcon={<MicrosoftIcon />} fullWidth>
        Continue with Microsoft
      </StyledButton>
      <StyledButton variant="outlined" startIcon={<AppleIcon />} fullWidth>
        Continue with Apple
      </StyledButton>
    </>
  );
};

export default AuthProviders;
