import React from 'react';
import { connect } from 'react-redux'

class FlashMessage extends React.Component {
  render(){
    const errors = Object.keys(this.props.user.messages).map((mKey, index) => {
      return <li key={index}>{mKey}: {this.props.user.messages[mKey]}</li>
    })

    if(this.props.user.messages) {
      return <ul className="flash-message">
        {errors}
      </ul>
    }
    else {
      return null;
    }
  }

}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
}

export default connect(mapStateToProps)(FlashMessage);
