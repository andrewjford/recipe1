import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { logoutUser } from '../actions/userActions'

class LogoutLink extends React.Component {
  handleLogout = (event) => {
    event.preventDefault();
    this.props.logoutUser();
  }

  render(){
    return <a href="" onClick={this.handleLogout}>Logout</a>
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    logoutUser: logoutUser,
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(LogoutLink);
