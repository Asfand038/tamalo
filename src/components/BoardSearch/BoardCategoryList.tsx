import React, { useState, ReactElement } from 'react';
import { useHistory } from 'react-router-dom';
import { AccordionDetails } from '@material-ui/core';
import {
  Add as AddIcon,
  Remove as RemoveIcon,
  StarBorderRounded as StarBorderRoundedIcon,
} from '@material-ui/icons';

import { IBoardLessDetails } from '../../utils';
import {
  StyledAccordion,
  StyledAccordionSummary,
  StyledBoardCard,
  StyledPlaceholderText,
} from './BoardSearch.styles';

interface IProps {
  title: string;
  boardCategory: IBoardLessDetails[];
  icon: ReactElement;
  placeholderText: string;
}

const BoardCategoryList: React.FC<IProps> = ({
  title,
  icon,
  boardCategory,
  placeholderText,
}) => {
  const [expandAccordion, setExpandAccordion] = useState(true);

  const history = useHistory();

  return (
    <StyledAccordion
      expanded={expandAccordion}
      onChange={() => setExpandAccordion(!expandAccordion)}
    >
      <StyledAccordionSummary
        expandIcon={expandAccordion ? <RemoveIcon /> : <AddIcon />}
        aria-controls="panel1bh-content"
        IconButtonProps={{ disableRipple: true }}
      >
        {icon}
        <span>{title}</span>
      </StyledAccordionSummary>
      <AccordionDetails>
        {boardCategory.map(({ id, title }) => (
          <StyledBoardCard
            key={id}
            onClick={() => history.push(`/boards/${id}`)}
          >
            <div />
            <div>
              <div>{title}</div>
              <StarBorderRoundedIcon className="animate-icon" />
            </div>
          </StyledBoardCard>
        ))}
        {!boardCategory.length && (
          <StyledPlaceholderText>{placeholderText}</StyledPlaceholderText>
        )}
      </AccordionDetails>
    </StyledAccordion>
  );
};

export default BoardCategoryList;
