import fetch from 'isomorphic-fetch';

export function fetchRecipes() {

  return (dispatch) => {
    return fetch('http://localhost:3001/recipes')
      .then(response => {return response.json()})
      .then(recipes => dispatch({
        type: 'FETCH_RECIPES',
        recipes: recipes
      }))
  }
}

export function createRecipe(input) {
  return (dispatch) => {
    return fetch('http://localhost:3001/recipes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({recipe: input})
    })
    .then(response => response.json())
    .then(json => dispatch(addRecipe(json)))
  }
}

export function addRecipe(recipe) {
  return {
    type: 'ADD_RECIPE',
    recipe: recipe,
  }
}
