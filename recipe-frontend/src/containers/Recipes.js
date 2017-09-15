import React from 'react';
import Recipe from '../components/Recipe'
import RecipeForm from '../components/RecipeForm'
import Loading from '../components/Loading'

class Recipes extends React.Component {

  render() {

    const recipes = this.props.recipes.map((recipe, index) => {
      return <Recipe key={index} recipe={recipe}/>
    })

    return <div>
      <h1>Recipes</h1>

      <Loading loaded={!!this.props.recipes} />

      <ul className="fade-in">
        {recipes}
      </ul>
      <RecipeForm />
    </div>
  }
}

export default Recipes;
