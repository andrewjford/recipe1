import React, { Component } from 'react';
import './App.css';
import Recipes from './containers/Recipes'
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <Recipes />
      </div>
    );
  }
}

export default App;
