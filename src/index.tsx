import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './modules';

import App from './App';
import './style/lib/normalize.css';
import './style/index.css';

import reportWebVitals from './reportWebVitals';

const enhancer =
  process.env.NODE_ENV === 'production'
    ? compose(applyMiddleware())
    : composeWithDevTools(applyMiddleware());

const store = createStore(rootReducer, enhancer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
