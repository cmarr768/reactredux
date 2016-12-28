import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import CommentApp from './src/reducers';
import App from './src/components/App';
import AddComment from './src/actions/AddComment';
import dataService from './src/services/dataService';

//Create store and initialize
let store = createStore(CommentApp, {}, compose(applyMiddleware(dataService)));
console.log('store state after initialization:', store.getState());
store.dispatch({type: 'GET_USER_DATA'});
console.log('store state after getting the user data:', store.getState());

//Render our application which will display our comment list.
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);