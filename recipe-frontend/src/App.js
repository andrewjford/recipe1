import React, { Component } from 'react';
import './App.css';
import Recipes from './containers/Recipes'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchRecipes } from './actions/recipeActions'

class App extends Component {

  componentDidMount() {
    this.props.fetchRecipes();
  }

  render() {
    return (
      <div className="App">
        <Recipes recipes={this.props.recipes}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchRecipes: fetchRecipes
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
