import React, { Component } from 'react';
import { injectGlobal } from 'styled-components';

injectGlobal`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }
`;

class App extends Component {
  render() {
    return <div className="app">Hello</div>;
  }
}

export default App;
