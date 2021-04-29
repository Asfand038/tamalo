import styled from 'styled-components';
import { Button } from '@material-ui/core';

export const StyledWrapper = styled.div`
  padding: 0 12px 12px;
  min-height: 300px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const StyledButton = styled(Button)`
  && {
    width: 100%;
    color: ${({ theme }) => theme.colors.neutral[100]};
    background-color: ${({ theme }) => theme.colors.green[100]};
    font-weight: bold;
    box-shadow: none;
    transition: background-color 85ms ease;
    text-transform: none;
    padding: 4px 14px;
    font-size: ${({ theme }) => theme.typeScale.paragraph};
    font-weight: 400;
    &:hover {
      box-shadow: none;
      background-color: ${({ theme }) => theme.colors.green[200]};
    }
  }
`;
