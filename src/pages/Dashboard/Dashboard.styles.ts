import styled from 'styled-components';
import { Grid } from '@material-ui/core';

export const StyledTitle = styled.div`
  display: flex;
  align-items: center;
  height: 32px;
  margin-bottom: 8px;
  & svg {
    width: 26px;
    height: 26px;
    margin-left: 7px;
    color: ${({ theme }) => theme.colors.blue[400]};
  }
  & span {
    margin: 4px 0 0 16px;
    font-size: 16px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.blue[400]};
  }
`;

export const StyledBoardsCategory = styled.div`
  margin-bottom: 20px;
`;

export const StyledAddBoard = styled(Grid)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.darkness[40]};
    background-clip: content-box;
    border-radius: 12px;
    max-width: 225px;
    min-width: 180px;
    cursor: pointer;
    height: 110px;
    & > div {
      color: ${({ theme }) => theme.colors.blue[400]};
      word-spacing: 0.8px;
      letter-spacing: 0.3px;
    }
    &:hover {
      background-color: ${({ theme }) => theme.colors.darkness[50]};
    }
  }
`;
