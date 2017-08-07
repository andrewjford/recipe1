export default function recipeReducer(state = {}, action) {
  switch(action.type) {
    case "FETCH_RECIPES":
      return {recipes: action.payload}
    default:
      return state;
  }
}
