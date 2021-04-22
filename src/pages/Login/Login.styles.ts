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

export const ErrorMessage = styled.div`
  text-align: left;
  & > p {
    background-color: ${({ theme }) => theme.colors.red[200]};
    color: ${({ theme }) => theme.colors.red[50]};
    font-size: ${({ theme }) => theme.typeScale.heading};
    line-height: 1.33;
    border-radius: 4px;
    border: ${({ theme }) => `1px solid ${theme.colors.red[200]}`};
    display: inline-block;
    padding: 0.5em 1em;
    text-align: left;
  }
`;
