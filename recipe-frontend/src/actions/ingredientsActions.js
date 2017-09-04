import fetch from 'isomorphic-fetch';

export function fetchIngredients(token) {

  let config = {
    method: 'GET',
    headers: {
      'Authorization': `Token token=${token}`
    },
  }

  return (dispatch) => {
    return fetch('http://localhost:3001/ingredients', config)
      .then(response => {return response.json()})
      .then(ingredients => dispatch({
        type: 'FETCH_INGREDIENTS',
        ingredients: ingredients
      }))
  }

}

export function changeIngredientInput(newInput) {
  return {
    type: 'CHANGE_INPUT',
    input: newInput,
  }
}

export function createIngredient(input) {
  return (dispatch) => {
    return fetch('http://localhost:3001/ingredients', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name: input})
    })
    .then(response => response.json())
    .then(json => dispatch(addIngredient(json)))
  }
}

export function addIngredient(ingredient) {
  return {
    type: 'ADD_INGREDIENT',
    ingredient: ingredient,
  }
}

export function clearInput() {
  return {
    type: 'CLEAR_INPUT',
  }
}
