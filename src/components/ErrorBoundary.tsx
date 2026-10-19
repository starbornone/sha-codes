import React, { Component, ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export default class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.error(error);
  }

  render() {
    if (!this.state.hasError) return this.props.children;

    return (
      <div className="flex flex-col items-center justify-center h-screen px-4 text-center bg-grey-900">
        <h1 className="font-bold text-greyish-200">
          <span className="highlight">sha</span>.codes
        </h1>
        <p>Something went wrong loading this page.</p>
        <button className="button" type="button" onClick={() => window.location.reload()}>
          Reload
        </button>
      </div>
    );
  }
}
