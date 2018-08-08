import React, { Component } from 'react';

export default class Full extends Component {
  constructor(props) {
    super(props);
  }
  static getDerivedStateFromProps(nextProps, prevState) {}
  shouldComponentUpdate = (nextProps, nextState) => {};
  componentDidMount = () => {};
  componentDidUpdate = (prevProps, prevState) => {};
  componentWillUnmount = () => {};

  render() {
    return <div />;
  }
}
