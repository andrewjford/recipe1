import React from 'react';

class Login extends React.Component {
  render(){
    return <form>
      <h1>Login</h1>
      <label>Email </label>
      <input type="text"/>
      <br/>
      <label>Password </label>
      <input type="password"/>
      <br/>
      <input type="submit"/>
    </form>
  }
}

export default Login;
