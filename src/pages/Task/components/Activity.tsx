import React from 'react';
import styled from 'styled-components';
import { ListRounded as ListRoundedIcon } from '@material-ui/icons';

const StyledTitleContainer = styled.div`
  position: relative;
  display: flex;
  min-height: 32px;
  padding: 8px 0;
  margin: 0 0 4px 40px;
`;

const StyledTitle = styled.div`
  font-size: 16px;
  line-height: 20px;
  color: #172b4d;
  font-weight: 600;
  margin-top: 6px;
`;

const StyledIcon = styled(ListRoundedIcon)`
  && {
    position: absolute;
    left: -42px;
    color: #42526e;
    height: 30px;
    line-height: 30px;
    width: 30px;
  }
`;

const Activity: React.FC = () => {
  return (
    <>
      <StyledTitleContainer>
        <StyledIcon />
        <StyledTitle>Description</StyledTitle>
      </StyledTitleContainer>
    </>
  );
};

export default Activity;
