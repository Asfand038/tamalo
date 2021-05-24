import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { StarBorderRounded as StarBorderRoundedIcon } from '@material-ui/icons';

import { defaultTheme } from '../../../../theme';
import { IBoardLessDetails } from '../../utils';
import { StyledGridItem, StyledTitle } from './DashboardCard.styles';

interface CardProps {
  details: IBoardLessDetails;
}

const DashboardCard: React.FC<CardProps> = ({ details }) => {
  const {
    id,
    background = { color: defaultTheme.colors.blue[100] },
    title,
  } = details;

  const [hoverBoard, setHoverBoard] = useState('');
  const history = useHistory();

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
      onClick={() => history.push(`/boards/${id}`)}
    >
      <div>
        <StyledTitle>{title}</StyledTitle>
        <StarBorderRoundedIcon />
      </div>
    </StyledGridItem>
  );
};

export default DashboardCard;
