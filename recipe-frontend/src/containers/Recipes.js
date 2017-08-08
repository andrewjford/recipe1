import React from 'react';
import Recipe from '../components/Recipe'
import RecipeForm from '../components/RecipeForm'

class Recipes extends React.Component {

  render() {

    const recipes = this.props.recipes.map((recipe, index) => {
      return <Recipe key={index} recipe={recipe}/>
    })

    return <div>
      <h1>Recipes</h1>
      <ul>
        {recipes}
      </ul>
      <RecipeForm />
    </div>
  }
}

export default Recipes;
