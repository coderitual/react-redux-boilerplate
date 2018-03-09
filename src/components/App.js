import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import routes from '../routes/routes';

class Root extends Component {
  render() {
    return <div className="app">{routes}</div>;
  }
}

export default Root;
