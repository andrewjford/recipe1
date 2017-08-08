import React, { Component } from 'react';
import './App.css';
import Recipes from './containers/Recipes'
import Ingredients from './containers/Ingredients';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchRecipes } from './actions/recipeActions'
import { fetchIngredients } from './actions/ingredientsActions'

class App extends Component {

  componentDidMount() {
    this.props.fetchRecipes();
    this.props.fetchIngredients();
  }

  render() {
    return (
      <div className="App">
        <Recipes recipes={this.props.recipes}/>
        <Ingredients ingredients={this.props.ingredients} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes,
    ingredients: state.ingredients.list,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchRecipes: fetchRecipes,
    fetchIngredients: fetchIngredients,
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
