import React from 'react';
import Ingredient from '../components/Ingredient';

export default class Ingredients extends React.Component {

  render() {
    const ingredients = this.props.ingredients.map((ingredient, index) => {
      return <Ingredient ingredient={ingredient} key={index}/>
    })

    return <div>
      <h1>Ingredients</h1>
      {ingredients}
    </div>
  }
}
