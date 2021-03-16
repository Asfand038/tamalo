import styled, { css } from 'styled-components';
import { Grid } from '@material-ui/core';

export const StyledTitle = styled.div`
  display: flex;
  align-items: center;
  height: 46px;
  & svg {
    width: 25px;
    height: 42px;
    color: ${({ theme }) => theme.colors.blue[400]};
  }
  & span {
    margin-left: 15px;
    font-size: ${({ theme }) => theme.typeScale.header4};
    font-weight: 700;
    color: ${({ theme }) => theme.colors.blue[400]};
  }
`;

interface GridItemProps {
  color: string;
  hovered: boolean;
}

export const StyledGridItem = styled(Grid)<GridItemProps>`
  && {
    background-color: ${({ color }) => (color ? color : 'inherit')};
    background-clip: content-box;
    border-radius: 9px;
    max-width: 200px;
    min-width: 150px;
    & > div {
      border-radius: inherit;
      height: 110px;
      display: flex;
      flex-direction: column;
      &:hover {
        cursor: pointer;
        background-color: ${({ theme }) => theme.colors.darkness[200]};
      }
      & > div {
        padding: 13px 0 0 13px;
        font-size: ${({ theme }) => theme.typeScale.header5};
        color: ${({ theme }) => theme.colors.neutral[100]};
        font-weight: 700;
      }
    }
    & svg {
      color: ${({ theme }) => theme.colors.neutral[100]};
      font-size: ${({ theme }) => theme.typeScale.header4};
      opacity: 0;
      margin: auto 4px 6px auto;
      transform: translateX(45%);
      transition: transform 200ms ease-out, opacity 200ms ease-out;
      ${({ hovered }) =>
        hovered &&
        css`
          transform: translateX(0);
          opacity: 1;
        `};
    }
  }
`;

export const StyledBoardsCategory = styled.div`
  margin-bottom: 20px;
`;
