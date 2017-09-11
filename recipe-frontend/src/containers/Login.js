import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect, Link } from 'react-router-dom';

import {
  loginUser,
  changeEmailInput,
  changePasswordInput,
  clearLoginInput
 } from '../actions/userActions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {redirect: false}

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    let formInput = {
      email: this.props.userForm.email,
      password: this.props.userForm.password
    }
    this.props.loginUser(formInput);
    this.props.clearLoginInput();
    this.setState({redirect: true});
  }

  handleEmailChange(event){
    this.props.changeEmailInput(event.target.value);
  }

  handlePasswordChange(event){
    this.props.changePasswordInput(event.target.value);
  }

  render(){
    if (this.props.user.session){
      return <Redirect to='/'/>;
    }

    return <form onSubmit={this.handleSubmit}>
      <h1>Login</h1>
      <label>Email </label>
      <input type="text" onChange={this.handleEmailChange}/>
      <br/>
      <label>Password </label>
      <input type="password" onChange={this.handlePasswordChange}/>
      <br/>
      <input type="submit"/>
    </form>
  }
}

const mapStateToProps = (state) => {
  return {
    userForm: state.user.input
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loginUser: loginUser,
    changeEmailInput: changeEmailInput,
    changePasswordInput: changePasswordInput,
    clearLoginInput: clearLoginInput,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
