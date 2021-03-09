import React, { useEffect } from 'react';
import styled from 'styled-components';
import { HorizontalBar } from 'react-chartjs-2';
import Responsive from '../Responsive';
import { getSurvey } from '../../api/survey';

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
  useEffect(() => {
    getSurvey();
  }, []);

  const calculatedArr = [10, 20, 5, 5, 10, 2, 7, 1];
  const rankColor = [
    '#11b288',
    '#207ac7',
    '#207ac7',
    '#207ac7',
    '#d6d6d6',
    '#d6d6d6',
    '#d6d6d6',
    '#d6d6d6',
  ];

  const data = {
    labels: ['INFP', 'INTP', 'INTJ', 'ISTP', 'ENTP', 'ENFP', 'ISTJ', 'ENTJ'],
    datasets: [
      {
        backgroundColor: rankColor,
        borderColor: rankColor,
        borderWidth: 1,
        hoverBackgroundColor: rankColor,
        hoverBorderColor: rankColor,
        data: calculatedArr,
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

  @media (min-width: 768px) {
  }
`;
