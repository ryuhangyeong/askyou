import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';
import App from '@/App';

import '@/style/lib/normalize.css';
import '@/style/index.css';
import reportWebVitals from '@/reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
