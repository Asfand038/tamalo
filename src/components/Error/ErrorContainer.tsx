import React from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';

import { ServerDownImg } from '../../assets';

const StyledErrorContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.blue[400]};
  & h4 {
    text-align: center;
    font-size: 20px;
  }
  & p {
    text-align: center;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  display: flex;
`;

const StyledButton = styled(Button)`
  && {
    color: ${({ theme }) => theme.colors.neutral[100]};
    background-color: ${({ theme }) => theme.colors.green[100]};
    font-weight: bold;
    box-shadow: none;
    text-transform: none;
    padding: 4px 14px;
    font-size: ${({ theme }) => theme.typeScale.paragraph};
    font-weight: 400;
    display: block;
    margin: 0 auto;
    &:hover {
      box-shadow: none;
      background-color: ${({ theme }) => theme.colors.green[200]};
    }
  }
`;

interface IProps {
  message?: string;
}

const ErrorContainer: React.FC<IProps> = ({ message }) => (
  <StyledErrorContainer>
    <ImageWrapper>
      <ServerDownImg />
    </ImageWrapper>

    <h4>{message}</h4>
    <p>You may want to try reloading the page.</p>
    <StyledButton variant="contained" onClick={() => window.location.reload()}>
      Reload Page
    </StyledButton>
  </StyledErrorContainer>
);

export default ErrorContainer;
