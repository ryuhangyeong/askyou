import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const HomePage = React.lazy(() => import('@/pages/HomePage'));
const AuthPage = React.lazy(() => import('@/pages/AuthPage'));

const App = () => (
  <Suspense fallback={<p>Loading...</p>}>
    <Router>
      <Switch>
        <Route path="/" exact render={() => <HomePage />} />
        <Route path="/auth" render={() => <AuthPage />} />
        <Route
          render={() => (
            <div>
              <h2>이 페이지는 존재하지 않습니다.</h2>
            </div>
          )}
        />
      </Switch>
    </Router>
  </Suspense>
);

export default App;
