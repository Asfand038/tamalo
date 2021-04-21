import React from 'react';

import { AddDescription } from './AddDescription';
import { Activity } from './Activity';
import { StyledContainer } from './MainContent.styles';
import { Comments } from './Comments';
import { IComment } from '../../utils';

interface IProps {
  comments: IComment[];
}

const MainContent: React.FC<IProps> = ({ comments }) => {
  return (
    <StyledContainer>
      <AddDescription />
      <Activity />
      <Comments comments={comments} />
    </StyledContainer>
  );
};

export default MainContent;
