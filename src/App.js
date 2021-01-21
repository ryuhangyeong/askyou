import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

const HomePage = React.lazy(() => import('@/pages/HomePage'));
const AuthPage = React.lazy(() => import('@/pages/AuthPage'));

const App = () => (
  <Suspense fallback={<p>Loading...</p>}>
    <Router>
      <Switch>
        <Route path="/" exact render={() => <HomePage />} />
        <Route path="/auth" render={() => <AuthPage />} />
        <Redirect path="*" to="/" />
      </Switch>
    </Router>
  </Suspense>
);

export default App;
