import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import recipeReducer from './reducers/recipeReducer'
import ingredientsReducer from './reducers/ingredientsReducer'
import userReducer from './reducers/userReducer'
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  recipes: recipeReducer,
  ingredients: ingredientsReducer,
  user: userReducer,
});

const store = createStore(
  rootReducer, composeWithDevTools(applyMiddleware(thunk),)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root')
);
registerServiceWorker();
