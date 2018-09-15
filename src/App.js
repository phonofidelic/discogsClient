import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import DiscogsBrowser from './components/DiscogsBrowser.container';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Discogs Browser</h1>
        </header>
        <DiscogsBrowser />
      </div>
    );
  }
}

export default App;
