import styled from 'styled-components';
import { Drawer, IconButton, Button } from '@material-ui/core';

export const StyledDrawer = styled(Drawer)`
  && {
    & > div {
      top: 40px;
      width: 339px;
      background-color: ${({ theme }) => theme.colors.neutral[200]};
    }
  }
`;

export const StyledMenuHeader = styled.div`
  position: relative;
  width: 100%;
  padding: 0 6px 0 12px;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.colors.blue[400]};
  & > span {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 48px;
    border-bottom: 1px solid rgba(9, 30, 66, 0.13);
    font-size: 16px;
    font-weight: 600;
  }
`;

export const StyledCloseIconButton = styled(IconButton)`
  && {
    position: absolute;
    top: 15px;
    right: 10px;
    padding: 0;
    & svg {
      font-size: 20px;
      color: #42526e;
    }
    &:hover {
      background-color: inherit;
      & svg {
        color: #091e42;
      }
    }
  }
`;

export const StyledMenuContent = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 12px 6px 12px 12px;
  width: 100%;
  height: 100%;
`;

export const StyledMenuButton = styled(Button)`
  && {
    padding: 6px 12px;
    text-transform: none;
    color: ${({ theme }) => theme.colors.blue[400]};
    font-size: ${({ theme }) => theme.typeScale.paragraph};
    font-weight: 600;
    & svg {
      color: ${({ theme }) => theme.colors.blue[300]};
    }
    & > span {
      justify-content: flex-start;
      align-items: flex-start;
    }
    &:hover {
      background-color: ${({ theme }) => theme.colors.darkness[50]};
    }
  }
`;

export const StyledDescriptionBtn = styled.div`
  width: 100%;
  text-align: start;
  margin: -2px 0 0 10px;
  & > div:last-child {
    font-weight: 400;
    color: ${({ theme }) => theme.colors.neutral[550]};
  }
`;

export const StyledBoardBgColorIcon = styled.img<{ bgColor: string }>`
  height: 20px;
  width: 20px;
  margin: 0 8px 0 2px;
  border-radius: 3px;
  background-color: ${({ bgColor }) => bgColor};
`;
