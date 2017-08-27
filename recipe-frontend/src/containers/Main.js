import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Recipes from './Recipes'
import Ingredients from './Ingredients';
import { fetchRecipes } from '../actions/recipeActions'
import { fetchIngredients } from '../actions/ingredientsActions'

class Main extends React.Component {

  componentDidMount() {
    this.props.fetchRecipes();
    this.props.fetchIngredients();
  }

  render() {
    return (
      <div className="Main">
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
export default connect(mapStateToProps, mapDispatchToProps)(Main);
