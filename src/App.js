import React, { Component } from 'react';
import Menu from './containers/Menu';
import AppContent from './containers/AppContent';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <AppContent />
      </div>
    );
  }
}


export default App;
