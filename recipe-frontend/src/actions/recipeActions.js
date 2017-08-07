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
