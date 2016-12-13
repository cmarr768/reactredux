import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import CommentApp from './src/reducers';
import App from './src/components/App';
import AddComment from './src/actions/AddComment';
//import App from './src/components/App.jsx';

//Create store and initialize
let store = createStore(CommentApp);
console.log('store state after initialization:', store.getState());

//dispatch a new comment manually
store.dispatch({
    type: 'ADD_COMMENT',
    id:-1,
    author: 'user a',
    text: 'new manual comment'
});
console.log('store state after dispacting comment:', store.getState());

//dispatch a new comment from the AddComment action
store.dispatch(AddComment('user b', 'comment from action'));
console.log('store state after dispacting action:', store.getState());

//Render our application which will display our comment list.
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);