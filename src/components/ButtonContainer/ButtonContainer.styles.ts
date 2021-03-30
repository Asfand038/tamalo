import styled from 'styled-components';
import { Button } from '@material-ui/core';

export const StyledButtonContainer = styled.div`
  margin-top: 8px;
  display: flex;
  align-items: center;
`;

export const StyledButton = styled(Button)`
  && {
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

export const StyledCloseIcon = styled.div`
  margin: 2px 0 0 5px;
  & svg {
    color: ${({ theme }) => theme.colors.neutral[500]};
    width: 25px;
    height: 25px;
  }
  &:hover {
    cursor: pointer;
    & svg {
      color: ${({ theme }) => theme.colors.blue[400]};
    }
  }
`;
