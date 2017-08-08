import React from 'react';

const RecipeLineItemInput = (props) => {
  return (
    <input type="text" id={props.id} onChange={props.handleChange}/>
  )
}

export default RecipeLineItemInput;
