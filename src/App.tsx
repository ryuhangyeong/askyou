import React, { useEffect, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import './firebase';
import Spinner from './components/Spinner';
import useAuth from './hooks/useAuth';

const IndexPage = React.lazy(() => import('./pages/IndexPage'));
const AuthPage = React.lazy(() => import('./pages/AuthPage'));
const MbtiPage = React.lazy(() => import('./pages/MbtiPage'));

const App = () => {
  const { user, loading, onAuthStateChanged } = useAuth();

  useEffect(() => {
    onAuthStateChanged();
  }, []);
  return (
    <>
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
            <Route path="/mbti" render={() => <MbtiPage />} />
            <Redirect path="*" to="/" />
          </Switch>
        </Router>
      </Suspense>
      {loading && <Spinner />}
    </>
  );
};

export default App;
