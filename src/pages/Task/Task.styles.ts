import styled from 'styled-components';
import { Avatar } from '@material-ui/core';

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
