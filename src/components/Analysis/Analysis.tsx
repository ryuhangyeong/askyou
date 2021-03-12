import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import styled from 'styled-components';
import { Context } from 'chartjs-plugin-datalabels';
import { getSurveyResult, ISurveyResult } from '../../api/survey';
import { getFrequencyMbti } from '../../data/survey';
import Responsive from '../Responsive';

const options = {
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  plugins: {
    datalabels: {
      color: '#fff',
      formatter: (value: number, context: Context) => {
        return `${context.chart.data.labels[context.dataIndex]} (${value})`;
      },
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
        data: Object.values(result),
        backgroundColor: [
          '#862e9c',
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
      },
    ],
  };
  return (
    <Layout>
      <Doughnut data={data} options={options} />
    </Layout>
  );
};

const Layout = styled(Responsive)`
  display: flex;
  align-items: center;
  height: 100vh;
`;
