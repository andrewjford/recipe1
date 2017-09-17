import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect, Link } from 'react-router-dom';

import {
  loginUser,
  changeEmailInput,
  changePasswordInput,
  clearLoginInput,
  clearFlash
 } from '../actions/userActions';
 import FlashMessage from '../components/FlashMessage'

class Login extends React.Component {
  constructor() {
    super();

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  componentWillUnmount() {
    this.props.clearFlash();
  }

  handleSubmit(event) {
    event.preventDefault();
    let formInput = {
      email: this.props.userForm.email,
      password: this.props.userForm.password
    }
    this.props.loginUser(formInput);
    this.props.clearLoginInput();
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
      <FlashMessage />
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
    user: state.user,
    userForm: state.user.input
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loginUser: loginUser,
    changeEmailInput: changeEmailInput,
    changePasswordInput: changePasswordInput,
    clearLoginInput: clearLoginInput,
    clearFlash: clearFlash,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
