import React from 'react';

const Recipe = (props) => {
  return <li>{props.recipe.name} {props.recipe.description}</li>
}

export default Recipe;
