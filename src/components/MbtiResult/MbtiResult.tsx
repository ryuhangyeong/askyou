import React, { useRef, useEffect } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4pluginsWordCloud from '@amcharts/amcharts4/plugins/wordCloud';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import useSurvey from '../../hooks/useSurvey';

export default () => {
  const chartRef = useRef<am4pluginsWordCloud.WordCloud | null>(null);
  const { select, mbti } = useSurvey();
  const history = useHistory();

  useEffect(() => {
    if (!mbti || !select.length) history.push('/');

    const chart = am4core.create('chart', am4pluginsWordCloud.WordCloud);
    chart.fontFamily = 'NotoSansKR';

    const series = chart.series.push(new am4pluginsWordCloud.WordCloudSeries());
    series.text = select.map((data) => data.title).join(' ');
    series.maxFontSize = am4core.percent(100);

    chartRef.current = chart;
    return () => chart.dispose();
  }, [history, mbti, select]);

  if (!mbti) return null;
  return (
    <Layout>
      <header>
        <h1>{mbti}</h1>
      </header>
      <div id="chart" style={{ width: '100%', height: '100%' }} />
    </Layout>
  );
};

const Layout = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;

  header {
    position: fixed;
    top: 0;
    width: 100%;
    h1 {
      text-align: center;
      font-size: 5rem;
    }
  }
`;
