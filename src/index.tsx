import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as am4core from '@amcharts/amcharts4/core';
import am4themesAnimated from '@amcharts/amcharts4/themes/animated';
import reportWebVitals from './reportWebVitals';
import store from './store';
import App from './App';

import './firebase';
import './style/lib/normalize.css';
import './style/index.css';

am4core.useTheme(am4themesAnimated);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
