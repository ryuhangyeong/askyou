import React from 'react';
import { Route, useRouteMatch } from 'react-router-dom';
import Share from '../components/Share';
import Mbti from '../components/Mbti';
import MbtiAnalysis from '../components/MbtiAnalysis';
import MbtiResult from '../components/MbtiResult';

const MbtiPage = () => {
  const { path } = useRouteMatch();

  return (
    <>
      <Share />
      <Route exact path={path} component={Mbti} />
      <Route path={`${path}/analysis`} component={MbtiAnalysis} />
      <Route path={`${path}/result`} component={MbtiResult} />
    </>
  );
};

export default MbtiPage;
