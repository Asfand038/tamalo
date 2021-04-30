import React, { Component, ErrorInfo, ReactNode } from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';

import { ServerDownImg } from '../assets';

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
  children: ReactNode;
}
interface IState {
  hasError: boolean;
}

class ErrorBoundary extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ hasError: true });
    console.error('Uncaught error:', error, errorInfo);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      return (
        <StyledErrorContainer>
          <ImageWrapper>
            <ServerDownImg />
          </ImageWrapper>

          <h4>
            The information you requested could not be loaded at this time.
          </h4>
          <p>You may want to try reloading the page.</p>
          <StyledButton
            variant="contained"
            onClick={() => window.location.reload()}
          >
            Reload Page
          </StyledButton>
        </StyledErrorContainer>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
