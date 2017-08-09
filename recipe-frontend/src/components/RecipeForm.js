import React from 'react';
import RecipeLineItemInput from './RecipeLineItemInput';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {createRecipe} from '../actions/recipeActions';


class RecipeForm extends React.Component {

  constructor() {
    super();

    this.state = {
      name: "",
      description: "blah",
      recipe_line_items_attributes: [{quantity: "", ingredient_attributes: {name: ""}}],
    }

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleQuantityChange = this.handleQuantityChange.bind(this);
    this.handleIngredientChange = this.handleIngredientChange.bind(this);
    this.addIngredientLine = this.addIngredientLine.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleNameChange(event) {
    this.setState({...this.state, name: event.target.value})
  }

  handleQuantityChange(event) {
    let newLines = [...this.state.recipe_line_items_attributes];
    const index = Number(event.target.id[1]);
    newLines[index] = {...newLines[index], quantity: event.target.value}
    this.setState({...this.state, recipe_line_items_attributes: newLines})
  }

  handleIngredientChange(event) {
    let newLines = [...this.state.recipe_line_items_attributes];
    const index = Number(event.target.id[1]);
    newLines[index] = {...newLines[index], ingredient_attributes: {name: event.target.value}}
    this.setState({...this.state, recipe_line_items_attributes: newLines})
  }

  handleFormSubmit(event) {
    event.preventDefault();

    this.props.createRecipe(this.state)
  }

  addIngredientLine() {
    this.setState({
      recipe_line_items_attributes: [...this.state.recipe_line_items_attributes, {quantity: "", ingredient_attributes: {name: ""}}]
    })
  }

  render() {

    const line_items = this.state.recipe_line_items_attributes.map((line, index) => {
      return <tr key={index}>
        <td><RecipeLineItemInput id={"q"+index} value={line.quantity}
          handleChange={this.handleQuantityChange}/></td>
        <td><RecipeLineItemInput id={"i"+index} value={line.ingredient_attributes.name}
          handleChange={this.handleIngredientChange}/></td>
      </tr>
    })

    return <form onSubmit={this.handleFormSubmit}>
      <label>Name </label>
      <input type="text" value={this.state.name} onChange={this.handleNameChange}/>
      <br/>
      <table>
        <tbody>
          <tr>
            <th>Quantity</th>
            <th>Ingredient</th>
          </tr>
          {line_items}
        </tbody>
      </table>
      <br/>
      <button onClick={this.addIngredientLine}>More lines</button>
      <input type="submit" />
    </form>
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    createRecipe: createRecipe
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(RecipeForm);
