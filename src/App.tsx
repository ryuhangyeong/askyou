import React, { useEffect, Suspense } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import './firebase';
import firebase from 'firebase';
import Spinner from './components/Spinner';
import { RootState } from './modules';
import { authLoading, authData } from './modules/auth';

const IndexPage = React.lazy(() => import('./pages/IndexPage'));
const AuthPage = React.lazy(() => import('./pages/AuthPage'));

const App = () => {
  const { user, loading } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((data) => {
      dispatch(authLoading(false));
      if (!data) dispatch(authData(null));
      else {
        const { displayName, email, uid } = data;
        dispatch(
          authData({
            displayName,
            email,
            uid,
          })
        );
      }
    });
  }, [dispatch]);

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
