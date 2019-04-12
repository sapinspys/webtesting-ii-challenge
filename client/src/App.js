import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Display from './components/Display'
import Dashboard from './components/Dashboard'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Display />
          <Dashboard />
        </header>
      </div>
    );
  }
}

export default App;
