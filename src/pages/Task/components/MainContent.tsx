import React from 'react';
import styled from 'styled-components';
import { Avatar } from '@material-ui/core';

import AddDescription from './AddDescription';
import Activity from './Activity';

const StyledContainer = styled.div`
  overflow-x: hidden;
  overflow-y: auto;
  min-height: 24px;
  padding: 0 8px 8px 16px;
  position: relative;
  width: 552px;

  & .activity-title-container {
    display: flex;
    align-items: center;
    min-height: 32px;
    justify-content: space-between;
    padding: 8px 0;
    position: relative;
    margin: 24px 0 4px 40px;
    color: #172b4d;
  }

  & .activity-icon {
    position: absolute;
    left: -42px;
    color: #42526e;
    height: 30px;
    line-height: 30px;
    width: 30px;
  }

  & .activity-title {
    font-size: 16px;
    line-height: 20px;
    color: #172b4d;
    font-weight: 600;
    margin-top: 5px;
  }
`;

export const StyledAvatar = styled(Avatar)`
  && {
    height: 32px;
    width: 32px;
    background-color: ${({ theme }) => theme.colors.red[100]};
    font-size: ${({ theme }) => theme.typeScale.paragraph};
    &:hover {
      cursor: pointer;
    }
  }
`;

const MainContent: React.FC = () => {
  return (
    <StyledContainer>
      <AddDescription />
      <Activity />
      <StyledAvatar>AJ</StyledAvatar>
    </StyledContainer>
  );
};

export default MainContent;
