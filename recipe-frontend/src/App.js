import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Recipes from './containers/Recipes'
import Ingredients from './containers/Ingredients';
import { fetchRecipes } from './actions/recipeActions'
import { fetchIngredients } from './actions/ingredientsActions'
import Login from './containers/Login'
import Main from './containers/Main'

class App extends Component {

  componentDidMount() {
    this.props.fetchRecipes();
    this.props.fetchIngredients();
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Main} />
        </div>
      </Router>
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
