import fetch from 'isomorphic-fetch';

export function fetchRecipes(token) {

  let config = {
    method: 'GET',
    headers: {
      'Authorization': `Token token=${token}`
    },
  }

  return (dispatch) => {
    return fetch('http://localhost:3001/recipes', config)
      .then(response => {return response.json()})
      .then(json => {
        if(!json.error){
          dispatch({
            type: 'FETCH_RECIPES',
            recipes: json
          });
        }
      })
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
    .then(json => {
      if(!json.error){
        dispatch(addRecipe(json));
      }
    })
  }
}

export function addRecipe(recipe) {
  return {
    type: 'ADD_RECIPE',
    recipe: recipe,
  }
}
