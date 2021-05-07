import React, { Component, ReactNode } from 'react';
import { ErrorContainer } from '../components';

const errorMessage = `The requested server is unavailable. 
  Please contact your support and describe your issue.`;

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

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    return hasError ? (
      <ErrorContainer message={errorMessage} />
    ) : (
      <>{children}</>
    );
  }
}

export default ErrorBoundary;
