import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import recipeReducer from './reducers/recipeReducer'
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  recipes: recipeReducer,
});

const store = createStore(
  rootReducer, applyMiddleware(thunk),
  
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root')
);
registerServiceWorker();
