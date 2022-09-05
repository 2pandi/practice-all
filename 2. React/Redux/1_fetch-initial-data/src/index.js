import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/store'
import { fetchPosts } from './redux/actions';

store.dispatch(fetchPosts());

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <h1>App</h1>
  </Provider>
);
