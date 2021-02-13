import React, { useEffect, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import './firebase';
import firebase from 'firebase';
import Spinner from './components/Spinner';
import useAuth from './hooks/useAuth';

const IndexPage = React.lazy(() => import('./pages/IndexPage'));
const AuthPage = React.lazy(() => import('./pages/AuthPage'));

const App = () => {
  const { user, loading, onAuthLoading, onAuthFetch } = useAuth();

  useEffect(() => {
    onAuthLoading(true);
    firebase.auth().onAuthStateChanged((data) => {
      onAuthLoading(false);
      if (!data) onAuthFetch(data);
      else {
        const { displayName, email, uid } = data;
        onAuthFetch({
          displayName,
          email,
          uid,
        });
      }
    });
  }, []);

  return (
    <Suspense fallback={<Spinner />}>
      <Router>
        <Switch>
          <Route path="/" exact render={() => <IndexPage />} />
          <Route
            path="/auth"
            render={() =>
              user ? (
                <Redirect
                  to={{
                    pathname: '/',
                  }}
                />
              ) : (
                !loading && <AuthPage />
              )
            }
          />
          <Redirect path="*" to="/" />
        </Switch>
      </Router>
    </Suspense>
  );
};

export default App;
