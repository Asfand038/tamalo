import styled from 'styled-components';
import { Avatar, Button } from '@material-ui/core';

export const StyledCloseIcon = styled.span`
  color: ${({ theme }) => theme.colors.blue[300]};
  border-radius: 50%;
  position: absolute;
  top: 0;
  right: 0;
  height: 32px;
  padding: 4px;
  margin: 4px;
  width: 32px;
  transition: background-color 85ms;
  &:hover {
    background-color: ${({ theme }) => theme.colors.darkness[50]};
    cursor: pointer;
  }
  & svg {
    margin: 6px;
  }
`;

export const StyledBody = styled.div`
  display: flex;
  margin-top: 16px;
`;

export const StyledAvatar = styled(Avatar)`
  && {
    height: 32px;
    width: 32px;
    font-weight: 500;
    display: inline-flex;
    background-color: ${({ theme }) => theme.colors.red[200]};
    font-size: ${({ theme }) => theme.typeScale.paragraph};
    &:hover {
      cursor: pointer;
    }
  }
`;

export const StyledDeleteButton = styled(Button)`
  && {
    font-size: ${({ theme }) => theme.typeScale.paragraph};
    font-weight: 400;
    background-color: ${({ theme }) => theme.colors.red[200]};
    color: ${({ theme }) => theme.colors.neutral[100]};
    text-transform: none;
    margin: 8px 4px 0 0;
    box-shadow: none;
    &:hover {
      box-shadow: none;
      background-color: ${({ theme }) => theme.colors.red[100]};
    }
  }
`;

export const StyledDeletePopOverContent = styled.div`
  padding: 0 12px 12px;
  & p {
    margin-bottom: 8px;
    color: ${({ theme }) => theme.colors.blue[400]};
  }
`;
