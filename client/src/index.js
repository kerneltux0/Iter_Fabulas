import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddelware} from 'redux';
import thunk from 'thunk';
import manageStories from './reducer/manageStories';
import './index.css';
import App from './App';

const store = createStore(manageStories,applyMiddleware(thunk));


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

