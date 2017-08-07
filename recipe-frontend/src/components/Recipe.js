import React from 'react';

const Recipe = (props) => {

  const line_items = props.recipe.recipe_line_items.map((line_item, index) => {
    return <li key={index}>{line_item.quantity} {line_item.ingredient.name}</li>
  })

  return <li>{props.recipe.name}: {props.recipe.description}
    <ul>
      {line_items}
    </ul>
  </li>
}

export default Recipe;
