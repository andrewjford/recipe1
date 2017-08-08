function ingredientsReducer(state = {list: [], input: ""}, action) {

  switch(action.type){
    case 'FETCH_INGREDIENTS':
      return {...state, list: action.ingredients};
    case 'CHANGE_INPUT':
      return {...state, input: action.input};
    case 'CLEAR_INPUT':
      return {...state, input: ""};
    case 'ADD_INGREDIENT':
      return {...state, list: [...state.list, action.ingredient]}
    default:
      return state;
  }
}

export default ingredientsReducer;
