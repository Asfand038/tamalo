import React from 'react';
import { ListRounded as ListRoundedIcon } from '@material-ui/icons';

import { Comments } from './Comments';
import { AddDescription } from './AddDescription';
import { IComment } from '../../utils';

import {
  StyledContainer,
  StyledTitleContainer,
  StyledTitle,
  StyledButton,
  StyledIcon,
  StyledActivityContainer,
  StyledDueDate,
} from './MainContent.styles';

interface IProps {
  comments: IComment[];
  dueDate: string | undefined;
}

const MainContent: React.FC<IProps> = ({ comments, dueDate }) => {
  return (
    <StyledContainer>
      {dueDate && (
        <StyledDueDate>
          <div>DUE DATE</div>
          <StyledButton>{dueDate}</StyledButton>
        </StyledDueDate>
      )}
      <AddDescription />
      <StyledActivityContainer>
        <StyledTitleContainer>
          <StyledIcon component={<ListRoundedIcon />} />
          <StyledTitle>Activity</StyledTitle>
          <StyledButton>Show details</StyledButton>
        </StyledTitleContainer>
      </StyledActivityContainer>
      <Comments comments={comments} />
    </StyledContainer>
  );
};

export default MainContent;
