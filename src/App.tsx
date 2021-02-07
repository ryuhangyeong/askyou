import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import Loading from './components/Loading';

const IndexPage = React.lazy(() => import('./pages/IndexPage'));
const AuthPage = React.lazy(() => import('./pages/AuthPage'));

const App = () => (
  <Suspense fallback={<Loading />}>
    <Router>
      <Switch>
        <Route path="/" exact render={() => <IndexPage />} />
        <Route path="/auth" render={() => <AuthPage />} />
        <Redirect path="*" to="/" />
      </Switch>
    </Router>
  </Suspense>
);

export default App;
