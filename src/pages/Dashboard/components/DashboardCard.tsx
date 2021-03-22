import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Grid } from '@material-ui/core';
import { StarBorderRounded as StarBorderRoundedIcon } from '@material-ui/icons';

import { defaultTheme } from '../../../theme';
import { BoardSchema } from './boardSchema';

// Styles
interface GridItemProps {
  color: string;
  hovered: number;
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
      height: 68px;
      display: flex;
      flex-direction: column;
      &:hover {
        cursor: pointer;
        background-color: ${({ theme }) => theme.colors.darkness[200]};
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

const StyledTitle = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.neutral[100]};
  font-weight: 700;
`;

interface CardProps {
  details: BoardSchema;
}

const DashboardCard: React.FC<CardProps> = ({ details }) => {
  const {
    id,
    background = { color: defaultTheme.colors.blue[100] },
    title,
  } = details;
  const [hoverBoard, setHoverBoard] = useState('');

  return (
    <StyledGridItem
      item
      sm={6}
      md={3}
      key={id}
      color={background.color}
      hovered={+(hoverBoard === id)}
      onMouseEnter={() => setHoverBoard(id)}
      onMouseLeave={() => setHoverBoard('')}
    >
      <div>
        <StyledTitle>{title}</StyledTitle>
        <StarBorderRoundedIcon />
      </div>
    </StyledGridItem>
  );
};

export default DashboardCard;
