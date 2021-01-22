import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Loader from '@/components/common/Loader';

const HomePage = React.lazy(() => import('@/pages/HomePage'));
const AuthPage = React.lazy(() => import('@/pages/AuthPage'));

const App = () => (
  <Suspense fallback={<Loader />}>
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
