import fetch from 'isomorphic-fetch';

const BACKEND = 'http://localhost:3001/'

class SessionApi {
  static login(credentials) {
    const request = new Request(BACKEND+'login', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({auth: credentials})
    });

    return fetch(request)
      .then(response => response.json())
      .catch(error => {
        return error;
      });
  }

  static signup(credentials) {
    const request = new Request(BACKEND+'signup', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({user: credentials})
    });

    return fetch(request)
      .then(response => response.json())
      .catch(error => {
        return error;
      });
  }
}

export default SessionApi;
