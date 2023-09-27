import React, { Component } from 'react';

const WithLogging = (WrappedComponent) => {
  return class extends Component {
    componentDidMount() {
      console.log(`Component ${this.getDisplayName(WrappedComponent)} is mounted on componentDidMount()`);
    }

    componentWillUnmount() {
      console.log(`Component ${this.getDisplayName(WrappedComponent)} is going to unmount on componentWillUnmount()`);
    }

    getDisplayName(WrappedComponent) {
      return WrappedComponent.displayName || WrappedComponent.name || 'Component';
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};

export default WithLogging;
