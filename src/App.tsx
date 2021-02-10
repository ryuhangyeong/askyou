import React, { Suspense, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import './firebase';
import firebase from 'firebase';

import Spinner from './components/Spinner';

const IndexPage = React.lazy(() => import('./pages/IndexPage'));
const AuthPage = React.lazy(() => import('./pages/AuthPage'));

const App = () => {
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
    });
  }, []);
  return (
    <Suspense fallback={<Spinner />}>
      <Router>
        <Switch>
          <Route path="/" exact render={() => <IndexPage />} />
          <Route path="/auth" render={() => <AuthPage />} />
          <Redirect path="*" to="/" />
        </Switch>
      </Router>
    </Suspense>
  );
};

export default App;
