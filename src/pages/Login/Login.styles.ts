import styled from 'styled-components';

import { FiberManualRecord as FiberManualRecordIcon } from '@material-ui/icons';
import { ButtonStyle, StyledLink } from '../../layouts';

export const LoginButton = styled(ButtonStyle)`
  && {
    background-color: ${({ theme }) => theme.colors.green[100]};
    :hover {
      background-color: ${({ theme }) => theme.colors.green[200]};
    }
  }
`;

export const StyledSSOLink = styled(StyledLink)`
  && {
    margin-top: 10px;
    display: block;
  }
`;

export const StyledIcon = styled(FiberManualRecordIcon)`
  && {
    font-size: 8px;
    margin: 0 8px 0;
  }
`;
