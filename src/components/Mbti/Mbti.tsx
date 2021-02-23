import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import Responsive from '../Responsive';
import Share from './Share';
import Survey from './Survey';
import ProgressBar from '../ProgressBar';
import Spinner from '../Spinner';
import useSurvey from '../../hooks/useSurvey';

export default () => {
  const [idx, setIdx] = useState(0);
  const { loading, list, onSurveyLoading, onSurveySelect } = useSurvey();

  const onSelect = useCallback(
    (data) => {
      if (idx <= list.length - 1) {
        setIdx(idx + 1);
        onSurveySelect(data);
      }

      if (idx === list.length - 1) {
        onSurveyLoading(true);
      }
    },
    [idx, setIdx, onSurveyLoading, onSurveySelect, list.length]
  );

  return (
    <>
      <Share />
      <Layout>
        <Wrapper>
          <Title>
            <h1>당신을 표현하는</h1>
            <h1>단어로 알아보는</h1>
            <h1>MBTI</h1>
          </Title>
        </Wrapper>
        <Wrapper className="center">
          <ProgressBar progress={idx * (100 / 36)} />
          <Survey list={list} idx={idx} onSelect={onSelect} />
        </Wrapper>
      </Layout>
      {loading && <Spinner />}
    </>
  );
};

const Layout = styled(Responsive)`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 1;

  &.center {
    flex-direction: column;
    justify-content: center;
    width: 100%;

    @media (min-width: 768px) {
      flex-direction: row;
    }
  }
`;

const Title = styled.div`
  position: relative;
  display: inline-block;

  h1 {
    font-size: 4rem;
    font-weight: 300;
    line-height: 5.5rem;

    @media (min-width: 768px) {
      font-size: 5.5rem;
    }
  }

  &::before,
  &::after {
    position: absolute;
    top: -5rem;
    display: block;
    content: '"';
    font-size: 7.5rem;
    font-weight: 500;
    display: none;

    @media (min-width: 768px) {
      top: -3rem;
      display: block;
    }
  }

  &::before {
    left: -3rem;
  }

  &::after {
    right: -2.5rem;
  }
`;
