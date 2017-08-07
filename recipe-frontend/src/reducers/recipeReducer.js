export default function recipeReducer(state = [], action) {
  switch(action.type) {
    case "FETCH_RECIPES":
      return action.recipes
    default:
      return state;
  }
}
