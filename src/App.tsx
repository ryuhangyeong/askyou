import React, { useEffect, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import Spinner from './components/Spinner';
import useAuth from './hooks/useAuth';
import useLoading from './hooks/useLoading';

const IndexPage = React.lazy(() => import('./pages/IndexPage'));
const AuthPage = React.lazy(() => import('./pages/AuthPage'));
const MbtiPage = React.lazy(() => import('./pages/MbtiPage'));

const App = () => {
  const { user, onGetCurrentUser } = useAuth();
  const { loading } = useLoading();

  /* eslint react-hooks/exhaustive-deps: "off" */
  /*
   *@description onGetCurrentUser는 인증 감지 함수이므로 useEffect 두번째 인자에 적용하면 무한 루프 실행됨
   */
  useEffect(() => {
    onGetCurrentUser();
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
                  !loading['auth/CURRENT_USER'] && <AuthPage />
                )
              }
            />
            <Route path="/mbti" render={() => <MbtiPage />} />
            <Redirect path="*" to="/" />
          </Switch>
        </Router>
      </Suspense>
      {loading['auth/CURRENT_USER'] && <Spinner />}
    </>
  );
};

export default App;
