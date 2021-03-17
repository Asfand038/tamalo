import styled, { css } from 'styled-components';
import { Grid } from '@material-ui/core';

export const StyledTitle = styled.div`
  display: flex;
  align-items: center;
  height: 46px;
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

interface GridItemProps {
  color: string;
  hovered: boolean;
}

export const StyledGridItem = styled(Grid)<GridItemProps>`
  && {
    background-color: ${({ color }) => color || 'inherit'};
    background-clip: content-box;
    border-radius: 12px;
    max-width: 225px;
    min-width: 180px;
    & > div {
      padding: 13px;
      position: relative;
      border-radius: inherit;
      height: 68px;
      display: flex;
      flex-direction: column;
      &:hover {
        cursor: pointer;
        background-color: ${({ theme }) => theme.colors.darkness[200]};
      }
      & > div {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        font-size: 16px;
        color: ${({ theme }) => theme.colors.neutral[100]};
        font-weight: 700;
      }
    }
    & svg {
      position: absolute;
      display: inline;
      right: 9px;
      bottom: 9px;
      color: ${({ theme }) => theme.colors.neutral[100]};
      font-size: ${({ theme }) => theme.typeScale.header4};
      opacity: 0;
      transform: translateX(45%);
      transition: transform 200ms ease-out, opacity 200ms ease-out,
        height 250ms ease-in, width 250ms ease-in;
      ${({ hovered }) =>
        hovered &&
        css`
          transform: translateX(0);
          opacity: 0.7;
        `};
      &:hover {
        opacity: 1;
        width: 20px;
        height: 20px;
      }
    }
  }
`;

export const StyledBoardsCategory = styled.div`
  margin-bottom: 20px;
`;
