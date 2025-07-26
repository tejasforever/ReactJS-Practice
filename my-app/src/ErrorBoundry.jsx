
// ErrorBoundry: React class component to catch JavaScript errors in child components
// Demonstrates use of componentDidCatch lifecycle for error boundaries
// Fixes: state syntax (colon, not semicolon), removes incomplete console statement, and improves error display
import React, { Component } from 'react';

export default class ErrorBoundry extends Component {
    // State to track if an error has occurred
    state = {
        hasError: false
    };

    // Lifecycle method to catch errors in child components
    componentDidCatch(error, info) {
        this.setState({ hasError: true });
        // You can log error details to an error reporting service here
        // console.error('Error caught by ErrorBoundry:', error, info);
    }

    render() {
        // If an error occurred, show fallback UI
        if (this.state.hasError) {
            return <div>Something went wrong.</div>;
        }
        // Otherwise, render children normally
        return this.props.children || <div>ErrorBoundry</div>;
    }
}
