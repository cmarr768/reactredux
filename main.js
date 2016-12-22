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

//Render our application which will display our comment list.
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);