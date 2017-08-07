import fetch from 'isomorphic-fetch';

export function fetchIngredients() {

  return (dispatch) => {
    return fetch('http://localhost:3001/ingredients')
      .then(response => {return response.json()})
      .then(ingredients => dispatch({
        type: 'FETCH_INGREDIENTS',
        ingredients: ingredients
      }))
  }

}
