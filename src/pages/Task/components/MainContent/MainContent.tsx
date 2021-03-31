import React from 'react';

import AddDescription from './AddDescription';
import Activity from './Activity';
import { StyledContainer } from './MainContent.styles';

const MainContent: React.FC = () => {
  return (
    <StyledContainer>
      <AddDescription />
      <Activity />
    </StyledContainer>
  );
};

export default MainContent;
