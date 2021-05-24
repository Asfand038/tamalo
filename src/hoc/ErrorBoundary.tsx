import React, { Component, ReactNode } from 'react';
import { ErrorContainer } from '../components';
import { errorMessages } from '../utils';

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
      <ErrorContainer message={errorMessages.generalError} />
    ) : (
      <>{children}</>
    );
  }
}

export default ErrorBoundary;
