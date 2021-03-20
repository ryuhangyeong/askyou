import React, { useRef, useEffect } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import styled from 'styled-components';
import { getSurveyResult, ISurveyResult } from '../../api/survey';
import { getFrequencyMbti } from '../../data/survey';
import Responsive from '../Responsive';

export interface IPie {
  type: string;
  value: number;
}

export default () => {
  const chartRef = useRef<am4charts.PieChart | null | undefined>(null);

  useEffect(() => {
    const chart = am4core.create('chart', am4charts.PieChart);

    (async () => {
      const survey: ISurveyResult[] = await getSurveyResult();

      chart.innerRadius = am4core.percent(40);
      chart.data = Object.entries(
        getFrequencyMbti(survey.map((item) => item.mbti))
      ).map(([type, value]) => ({
        type,
        value,
      }));
      chartRef.current = chart;

      const label = chart.createChild(am4core.Label);
      label.text = `${survey.length}명의 검사 결과`;
      label.fontSize = 20;
      label.align = 'center';

      const pieSeries: am4charts.PieSeries = chart.series.push(
        new am4charts.PieSeries()
      );
      pieSeries.dataFields.value = 'value';
      pieSeries.dataFields.category = 'type';
      pieSeries.slices.template.stroke = am4core.color('#fff');
      pieSeries.hiddenState.properties.endAngle = -90;
      pieSeries.hiddenState.properties.startAngle = -90;
    })();

    return () => chart.dispose();
  }, []);

  useEffect(() => {
    const $chart = document.querySelector('#chart') as HTMLElement;

    const resize = () => {
      const windowSize = window.innerWidth || document.body.clientWidth;

      let height: string = '100%';
      if (windowSize <= 768) height = '40%';
      $chart.style.height = height;
    };

    window.addEventListener('resize', resize);
    resize();
    return () => window.removeEventListener('resize', resize);
  }, []);

  return (
    <Layout>
      <div id="chart" style={{ width: '100%' }} />
    </Layout>
  );
};

const Layout = styled(Responsive)`
  display: flex;
  align-items: center;
  height: 100vh;

  #chart {
    transition: height 1s;
  }
`;
