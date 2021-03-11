import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { HorizontalBar } from 'react-chartjs-2';
import Responsive from '../Responsive';
import { getSurveyResult, ISurveyResult } from '../../api/survey';
import { getFrequencyMbti } from '../../data/survey';

const options = {
  legend: {
    display: false,
  },
  scales: {
    yAxes: [
      {
        gridLines: {
          display: false,
        },
      },
    ],
    xAxes: [
      {
        gridLines: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
    ],
    ticks: {
      display: false,
    },
  },
};

export default () => {
  const [result, setResult] = useState({});

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    const survey: ISurveyResult[] = await getSurveyResult();
    setResult(getFrequencyMbti(survey.map((item) => item.mbti)));
  };

  const data = {
    labels: Object.keys(result),
    datasets: [
      {
        backgroundColor: [
          '#868e96',
          '#fa5252',
          '#e64980',
          '#be4bdb',
          '#7950f2',
          '#4c6ef5',
          '#228be6',
          '#15aabf',
          '#12b886',
          '#40c057',
          '#82c91e',
          '#fab005',
          '#fd7e14',
          '#fff3bf',
          '#e9fac8',
          '#d3f9d8',
        ],
        data: Object.values(result),
      },
    ],
  };

  return (
    <Layout>
      <HorizontalBar data={data} options={options} />
    </Layout>
  );
};

const Layout = styled(Responsive)`
  display: flex;
  align-items: center;
  height: 100vh;
`;
