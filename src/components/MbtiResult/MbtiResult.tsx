import React, { useRef, useEffect } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4pluginsWordCloud from '@amcharts/amcharts4/plugins/wordCloud';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { AiFillFileImage } from 'react-icons/ai';
import useSurvey from '../../hooks/useSurvey';
import Message from '../Message';
import Share from '../Share';
import svgtoImage from '../../utils/svgToImage';

export default () => {
  const chartRef = useRef<am4pluginsWordCloud.WordCloud | null>(null);
  const { select, mbti } = useSurvey();
  const history = useHistory();

  useEffect(() => {
    if (!mbti || !select.length) history.push('/');

    const chart = am4core.create('chart', am4pluginsWordCloud.WordCloud);
    chart.fontFamily = 'NotoSansKR';

    const series = chart.series.push(new am4pluginsWordCloud.WordCloudSeries());
    series.text = select
      .map((data) => data.title)
      .concat(mbti)
      .join(' ');
    series.maxFontSize = am4core.percent(100);

    chartRef.current = chart;

    return () => chart.dispose();
  }, [history, mbti, select]);

  const onClick = () => svgtoImage(document.querySelector('#chart svg'));

  return (
    <Layout>
      <Share onClick={onClick}>
        <AiFillFileImage />
        <Message className="message">다운로드</Message>
      </Share>
      <div id="chart" style={{ width: '100%', height: '100%' }} />
    </Layout>
  );
};

const Layout = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;

  .item {
    position: fixed;
    top: 3rem;
    left: 3rem;
    z-index: 1001;
  }
`;
