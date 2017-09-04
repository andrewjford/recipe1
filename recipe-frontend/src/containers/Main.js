import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect, Link } from 'react-router-dom';

import Recipes from './Recipes'
import Ingredients from './Ingredients';
import { fetchRecipes } from '../actions/recipeActions'
import { fetchIngredients } from '../actions/ingredientsActions'

class Main extends React.Component {

  componentDidMount() {
    this.props.fetchRecipes(this.props.user.token);
    this.props.fetchIngredients(this.props.user.token);
  }

  doIt = (event) => {
    this.props.fetchRecipes(this.props.user.token);
    this.props.fetchIngredients(this.props.user.token);
  }

  render() {
    if(!this.props.user.token){
      return <Redirect to='/login'/>;
    }

    return (
      <div className="Main">
        <button onClick={this.doIt}>Load</button>
        <Link to='/login'>Login</Link>
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
    user: state.user,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchRecipes: fetchRecipes,
    fetchIngredients: fetchIngredients,
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Main);
