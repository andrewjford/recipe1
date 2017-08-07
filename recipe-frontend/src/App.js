import React, { Component } from 'react';
import './App.css';
import Recipes from './containers/Recipes'
import { connect } from 'react-redux';

class App extends Component {

  constructor(){
    super();

    this.state = {
      recipes: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/recipes')
    .then(response => response.json())
    .then(array => this.setState({...this.state, recipes: array}))
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <Recipes recipes={this.state.recipes}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes
  }
}

export default App;
