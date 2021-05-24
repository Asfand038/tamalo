import { Button, Menu } from '@material-ui/core';
import styled from 'styled-components';

export const StyledCoverWrapper = styled.div<{ bgColor: string }>`
  background-color: ${({ bgColor }) => bgColor};
  height: 160px;
  width: 100%;
  position: relative;
  &:hover {
    opacity: 0.9;
    cursor: pointer;
  }
`;

export const StyledImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
  object-position: center center;
  box-sizing: border-box;
  position: relative;
`;

export const StyledCloseIcon = styled.span<{ dark: number }>`
  color: ${({ theme, dark }) =>
    dark ? theme.colors.neutral[100] : theme.colors.blue[300]};
  background-color: ${({ theme, dark }) =>
    dark ? theme.colors.transparency[200] : theme.colors.darkness[50]};
  z-index: 1;
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
    background-color: ${({ theme, dark }) =>
      dark ? theme.colors.transparency[400] : theme.colors.darkness[200]};
    cursor: pointer;
  }
  & svg {
    margin: 6px;
  }
`;

export const StyledButton = styled(Button)<{ dark: number }>`
  && {
    position: absolute;
    bottom: 8px;
    right: 8px;
    border-radius: 3px;
    padding: 6px 10px 6px 14px;
    text-transform: none;
    box-shadow: none;
    color: ${({ theme, dark }) =>
      dark ? theme.colors.neutral[100] : theme.colors.blue[400]};
    background-color: ${({ theme, dark }) =>
      dark ? theme.colors.transparency[200] : theme.colors.darkness[50]};
    font-size: ${({ theme }) => theme.typeScale.paragraph};
    font-weight: 400;
    & svg {
      font-size: ${({ theme }) => theme.typeScale.paragraph};
    }
    &:hover {
      background-color: ${({ theme, dark }) =>
        dark ? theme.colors.transparency[400] : theme.colors.darkness[200]};
      box-shadow: none;
    }
  }
`;

export const StyledMenu = styled(Menu)`
  && {
    & li {
      color: ${({ theme }) => theme.colors.blue[400]};
      &:hover {
        background-color: ${({ theme }) => theme.colors.darkness[50]};
      }
    }
  }
`;
