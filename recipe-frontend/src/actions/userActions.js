import fetch from 'isomorphic-fetch';

export function login() {

  return (dispatch) => {
    return fetch('http://localhost:3001/token')
      .then(response => {return response.json()})
      .then(hash => dispatch({
        type: 'FETCH_TOKEN',
        payload: hash
      }))
  }
}
