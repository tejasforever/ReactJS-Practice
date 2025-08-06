// ErrorBoundry: React class component to catch JavaScript errors in child components
// Uses componentDidCatch lifecycle to show fallback UI on error
import React, { Component } from 'react';

export default class ErrorBoundry extends Component {
  // Track if an error has occurred
  state = {
    hasError: false
  };

  // Catch errors in any child components
  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    // Optional: Log error to a service
    console.error('Error caught by ErrorBoundry:', error, info);
  }

  render() {
    if (this.state.hasError) {
      // You could customize this with your <ErrorPage /> component too
      return <div>Something went wrong.</div>;
    }

    // Normal rendering if no error
    return this.props.children || <div>ErrorBoundry</div>;
  }
}
