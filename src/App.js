import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';

import DiscogsBrowser from './components/DiscogsBrowser.container';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <DiscogsBrowser />
      </div>
    );
  }
}

export default App;
