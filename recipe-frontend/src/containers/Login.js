import React from 'react';

class Login extends React.Component {
  constructor() {
    super();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    debugger;
    
  }

  render(){
    return <form onSubmit={this.handleSubmit}>
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
