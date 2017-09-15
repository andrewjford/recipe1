import React from 'react';

const RecipeLineItemInput = (props) => {
  return (
    <input type="text" id={props.id} value={props.value}
      onChange={props.handleChange}/>
  )
}

export default RecipeLineItemInput;
