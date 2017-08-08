import React from 'react';
import RecipeLineItemInput from './RecipeLineItemInput';

class RecipeForm extends React.Component {

  constructor() {
    super();

    this.state = {
      name: "",
      lines: [{quantity: "", ingredient: ""}],
    }

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleQuantityChange = this.handleQuantityChange.bind(this);
    this.handleIngredientChange = this.handleIngredientChange.bind(this);
    this.addIngredientLine = this.addIngredientLine.bind(this);
  }

  handleNameChange(event) {
    this.setState({...this.state, name: event.target.value})
  }

  handleQuantityChange(event) {
    let newLines = [...this.state.lines];
    const index = Number(event.target.id[1]);
    newLines[index] = {...newLines[index], quantity: event.target.value}
    this.setState({...this.state, lines: newLines})
  }

  handleIngredientChange(event) {
    let newLines = [...this.state.lines];
    const index = Number(event.target.id[1]);
    newLines[index] = {...newLines[index], ingredient: event.target.value}
    this.setState({...this.state, lines: newLines})
  }

  handleFormSubmit(event) {
    event.preventDefault();
  }

  addIngredientLine() {
    this.setState({
      lines: [...this.state.lines, {quantity: "", ingredient: ""}]
    })
  }

  render() {

    const line_items = this.state.lines.map((line, index) => {
      return <tr key={index}>
        <td><RecipeLineItemInput id={"q"+index} value={line.quantity}
          handleChange={this.handleQuantityChange}/></td>
        <td><RecipeLineItemInput id={"i"+index} value={line.ingredient}
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

export default RecipeForm;
