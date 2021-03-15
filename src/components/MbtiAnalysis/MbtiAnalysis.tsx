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
      <Wrapper>
        <h1>단어로 알아보는</h1>
        <h1>MBTI</h1>
      </Wrapper>
      <Wrapper>
        <Doughnut data={data} options={options} />
      </Wrapper>
    </Layout>
  );
};

const Layout = styled(Responsive)`
  overflow: hidden;
  height: 100vh;
`;

/*
 * @description flex로 하는 경우 chart.js의 width, height 값 고정으로 인해 
  정확히 절반씩 표현을 하지 못하여 부득히 하게 float로 설정
 */
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;

  h1 {
    font-size: 3.5rem;

    @media (min-width: 768px) {
      font-size: 5.5rem;
    }
  }

  @media (min-width: 768px) {
    float: left;
    width: 50%;
    height: 100%;
  }
`;
