export default function userReducer(
  state = {session: !!sessionStorage.jwt,
    input: {email: "", password: "", confirm: ""}}, action) {
  switch(action.type) {
    case "FETCH_TOKEN":
      return {...state, token: action.payload.token}
    case "CHANGE_EMAIL_INPUT":
      return {...state, input: {...state.input, email: action.payload}}
    case "CHANGE_PASSWORD_INPUT":
      return {...state, input: {...state.input, password: action.payload}}
    case "CHANGE_CONFIRM_INPUT":
      return {...state, input: {...state.input, confirm: action.payload}}
    case "SET_LOGGED_IN":
      return {...state, loggedIn: action.payload}
    case "LOG_IN_SUCCESS":
      return {...state, input: {email: "", password: ""}, session: !!sessionStorage.jwt}
    case "LOG_OUT":
      return {...state, session: false}
    case "CLEAR_LOGIN_INPUT":
      return {...state, input: {...state.input, password: ""}}
    default:
      return state;
  }
}
