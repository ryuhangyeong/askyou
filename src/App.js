import React from 'react';
import HomePage from '@/pages/HomePage';
import { Route } from 'react-router-dom';

const App = () => (
  <>
    <Route path="/" exact component={HomePage} />
  </>
);

export default App;
