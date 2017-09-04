import fetch from 'isomorphic-fetch';

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
