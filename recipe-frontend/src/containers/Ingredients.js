import React from 'react';
import Ingredient from '../components/Ingredient';
import IngredientForm from '../components/IngredientForm';

export default class Ingredients extends React.Component {

  render() {
    const ingredients = this.props.ingredients.map((ingredient, index) => {
      return <Ingredient ingredient={ingredient} key={index}/>
    })

    return <div>
      <h1>Ingredients</h1>
      <ul>
        {ingredients}
      </ul>
      <IngredientForm />
    </div>
  }
}
