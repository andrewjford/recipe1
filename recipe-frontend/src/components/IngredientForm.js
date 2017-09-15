import React from 'react';
import {bindActionCreators} from 'redux';
import {changeIngredientInput, createIngredient,
  clearInput} from '../actions/ingredientsActions'
import {connect} from 'react-redux';

class IngredientForm extends React.Component {
  constructor() {
    super();

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleFormSubmit(event){
    event.preventDefault();
    this.props.createIngredient(this.props.ingredientInput, this.props.user.token);
    this.props.clearInput();
  }

  handleChange(event){
    this.props.changeInput(event.target.value);
  }

  render() {
    return <form onSubmit={this.handleFormSubmit}>
      <label>Name</label>
      <input type="text" value={this.props.ingredientInput} onChange={this.handleChange}/>
      <input type="submit" />
    </form>
  }
}

const mapStateToProps = (state) => {
  return {
    ingredientInput: state.ingredients.input,
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    changeInput: changeIngredientInput,
    createIngredient: createIngredient,
    clearInput: clearInput,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(IngredientForm);
