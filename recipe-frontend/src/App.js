import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Login from './containers/Login'
import Signup from './components/Signup'
import Main from './containers/Main'

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Main} />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes,
    ingredients: state.ingredients.list,
  }
}

export default connect(mapStateToProps)(App);
