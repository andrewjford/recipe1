import fetch from 'isomorphic-fetch';

class SessionApi {
  static login(credentials) {
    const request = new Request('http://localhost:3001/login', {
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
}

export default SessionApi;
