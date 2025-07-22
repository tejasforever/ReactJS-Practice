import React, { Component } from 'react'

export default class ErrorBoundry extends Component {

    state = {
        hasError: false;
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true });
        console.
    }

  render() {
    return (
      <div>ErrorBoundry</div>
    )
  }
}
