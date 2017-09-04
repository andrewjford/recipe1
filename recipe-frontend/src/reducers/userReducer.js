export default function userReducer(
  state = {input: {email: "", password: ""}}, action) {
  switch(action.type) {
    case "FETCH_TOKEN":
      return {...state, token: action.payload.token}
    case "CHANGE_EMAIL_INPUT":
      return {...state, input: {...state.input, email: action.payload}}
    case "CHANGE_PASSWORD_INPUT":
      return {...state, input: {...state.input, password: action.payload}}
    case "SET_LOGGED_IN":
      return {...state, loggedIn: action.payload}
    default:
      return state;
  }
}
