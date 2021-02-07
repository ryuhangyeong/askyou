import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import App from './App';

import './firebase';
import './style/lib/normalize.css';
import './style/index.css';

import reportWebVitals from './reportWebVitals';

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log(user);
  } else {
    console.log('no user');
  }
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
