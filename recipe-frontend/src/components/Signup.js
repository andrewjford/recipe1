import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';

import {
  signupUser,
  changeEmailInput,
  changePasswordInput,
  changeConfirmInput,
  clearLoginInput
 } from '../actions/userActions';

class Signup extends React.Component {
  constructor() {
    super();

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleConfirmChange = this.handleConfirmChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    let formInput = {
      email: this.props.userForm.email,
      password: this.props.userForm.password,
      password_confirmation: this.props.userForm.confirm
    }
    this.props.signupUser(formInput);
  }

  handleEmailChange(event) {
    this.props.changeEmailInput(event.target.value);
  }

  handlePasswordChange(event) {
    this.props.changePasswordInput(event.target.value);
  }

  handleConfirmChange(event) {
    this.props.changeConfirmInput(event.target.value);
  }

  render(){
    if (this.props.user.session){
      return <Redirect to='/'/>;
    }

    return <form onSubmit={this.handleSubmit}>
      <h1>Signup</h1>
      <label>Email </label>
      <input type="text" onChange={this.handleEmailChange}/>
      <br/>
      <label>Password </label>
      <input type="password" onChange={this.handlePasswordChange}/>
      <br/>
      <label>Confirm Password </label>
      <input type="password" onChange={this.handleConfirmChange}/>
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
    signupUser: signupUser,
    changeEmailInput: changeEmailInput,
    changePasswordInput: changePasswordInput,
    changeConfirmInput: changeConfirmInput,
    clearLoginInput: clearLoginInput,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
