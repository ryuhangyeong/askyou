import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';

import '@/style/lib/normalize.css';
import '@/style/index.css';
import reportWebVitals from '@/reportWebVitals';

import App from '@/App';

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
