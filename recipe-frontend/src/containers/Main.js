import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect, Link } from 'react-router-dom';

import Recipes from './Recipes'
import Ingredients from './Ingredients'
import { fetchRecipes } from '../actions/recipeActions'
import { fetchIngredients } from '../actions/ingredientsActions'
import { logoutUser } from '../actions/userActions'

class Main extends React.Component {

  componentDidMount() {
    this.props.fetchRecipes(this.props.user.token);
    this.props.fetchIngredients(this.props.user.token);
  }

  handleLogout = (event) => {
    event.preventDefault();
    this.props.logoutUser();
  }

  render() {
    if(!this.props.user.session){
      return <Redirect to='/login'/>;
    }

    return (
      <div className="Main">
        <Link to='/login'>Login</Link>
        <a href="" onClick={this.handleLogout}>Logout</a>
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
    logoutUser: logoutUser,
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Main);
