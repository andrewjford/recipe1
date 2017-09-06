import fetch from 'isomorphic-fetch';
import sessionApi from '../api/SessionApi';

export function loginUser(credentials) {
  return function(dispatch) {
    return sessionApi.login(credentials)
      .then(response => {
        if(response.jwt){
          sessionStorage.setItem('jwt', response.jwt);
          dispatch(loginSuccess());
        }
      })
      .catch(error => {
        throw(error);
      })
  }
}

export function loginSuccess() {
  return {
    type: 'LOG_IN_SUCCESS'
  }
}

export function logoutUser() {
  return function(dispatch){
    sessionStorage.removeItem('jwt');
    dispatch({
      type: 'LOG_OUT'
    })
  }
}

export function fetchToken(input) {
  let b64 = window.btoa(`${input.email}:${input.password}`)
  let config = {
    method: 'GET',
    headers: {
      'Content-Type':'application/x-www-form-urlencoded',
      'Authorization': `Basic ${b64}`
    },
  }
  return (dispatch) => {
    return fetch('http://localhost:3001/token', config)
      .then(response => {return response.json()})
      .then(hash => {
        dispatch({
          type: 'FETCH_TOKEN',
          payload: hash
        });
        return hash;
      })
      .then(hash => {
        if(hash.token){
          dispatch({
            type: 'SET_LOGGED_IN',
            payload: true
          })
        }
      })
  }
}

export function changePasswordInput(newInput) {
  return {
    type: 'CHANGE_PASSWORD_INPUT',
    payload: newInput,
  }
}

export function changeEmailInput(newInput) {
  return {
    type: 'CHANGE_EMAIL_INPUT',
    payload: newInput,
  }
}
