import React from 'react';
import { Route, useHistory } from 'react-router-dom';
import Share from '../components/Share';
import Mbti from '../components/Mbti';
import MbtiAnalysis from '../components/MbtiAnalysis';
import MbtiResult from '../components/MbtiResult';

const MbtiPage = () => {
  const {
    location: { pathname },
  } = useHistory();
  return (
    <>
      {pathname !== '/mbti/result' && <Share />}
      <Route exact path="/mbti" component={Mbti} />
      <Route path="/mbti/analysis" component={MbtiAnalysis} />
      <Route path="/mbti/result" component={MbtiResult} />
    </>
  );
};

export default MbtiPage;
