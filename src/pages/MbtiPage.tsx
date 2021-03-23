import React from 'react';
import { Route } from 'react-router-dom';
import Mbti from '../components/Mbti';
import MbtiAnalysis from '../components/MbtiAnalysis';
import MbtiResult from '../components/MbtiResult';

const MbtiPage = () => {
  return (
    <>
      <Route exact path="/mbti" component={Mbti} />
      <Route path="/mbti/analysis" component={MbtiAnalysis} />
      <Route path="/mbti/result" component={MbtiResult} />
    </>
  );
};

export default MbtiPage;
