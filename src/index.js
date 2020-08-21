import React from 'react';
import ReactDOM from 'react-dom';


import './index.css';
import App from './container/App';
import { createStore } from 'redux';
import fields from './reducers';

const initialState = [
  { id:1, author: 'moderator', commentText: 'mod-text', date: new Date().toLocaleString() },
  { id:2, author: 'test-user', commentText: 'user-text', date: new Date().toLocaleString() }
];


const store = createStore(fields, initialState);

ReactDOM.render(
  <App
    store ={store}/>,
  document.getElementById('root')
);
