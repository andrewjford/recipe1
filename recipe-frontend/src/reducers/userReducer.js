export default function userReducer(state = [], action) {
  switch(action.type) {
    case "FETCH_TOKEN":
      return action.payload
    default:
      return state;
  }
}
