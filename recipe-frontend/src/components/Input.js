import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Input extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    this.props.changeInput(event.target.value);
  }

  render(){
    return (
      <label>{this.props.label} </label>
      <input type="text" onChange={this.handleChange}/>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    input: this.props.input,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    changeInput: this.props.action,
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(Input);
