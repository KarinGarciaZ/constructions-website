import React, { Component } from 'react';
import { HashRouter  } from 'react-router-dom';
import Layout from './hoc/Layout';
import './App.css';

class App extends Component {
  render() {
    return (
      <HashRouter >
        <Layout />
      </HashRouter >
    );
  }
}

export default App;
