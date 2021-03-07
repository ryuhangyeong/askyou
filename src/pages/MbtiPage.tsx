import React from 'react';
import { Route, useRouteMatch } from 'react-router-dom';
import Share from '../components/Share';
import Mbti from '../components/Mbti';
import Analysis from '../components/Analysis';

const MbtiPage = () => {
  const { path } = useRouteMatch();

  return (
    <>
      <Share />
      <Route exact path={path} component={Mbti} />
      <Route path={`${path}/analysis`} component={Analysis} />
    </>
  );
};

export default MbtiPage;
