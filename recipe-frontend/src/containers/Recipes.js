import React from 'react';
import Recipe from '../components/Recipe'
import fetch from 'isomorphic-fetch'

class Recipes extends React.Component {

  render() {

    const recipes = this.props.recipes.map((recipe, index) => {
      return <Recipe key={index} recipe={recipe}/>
    })

    return <div>
      <h1>Recipes container</h1>
      {recipes}
    </div>
  }
}

export default Recipes;
