import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '@material-ui/core';

const StyledWrapper = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.blue[100]};
  color: ${({ theme }) => theme.colors.neutral[100]};
  display: flex;
  position: relative;
`;
const StyledMessage = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  & div {
    font-size: 200px;
    letter-spacing: 6px;
  }
`;
const StyledButton = styled(Button)`
  && {
    margin: 10px auto 0;
    text-transform: none;
    font-size: ${({ theme }) => theme.typeScale.paragraph};
    color: ${({ theme }) => theme.colors.neutral[100]};
    background-color: ${({ theme }) => theme.colors.transparency[200]};
    padding: 8px 12px;
    &:hover {
      background-color: ${({ theme }) => theme.colors.transparency[300]};
    }
  }
`;

const NotFoundPage: React.FC = () => {
  const history = useHistory();

  return (
    <StyledWrapper>
      <StyledMessage>
        <div>404</div>
        <StyledButton onClick={() => history.goBack()}>
          Take me back
        </StyledButton>
      </StyledMessage>
    </StyledWrapper>
  );
};

export default NotFoundPage;
