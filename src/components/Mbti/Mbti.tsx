import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import Responsive from '../Responsive';
import Survey from '../Survey';
import ProgressBar from '../ProgressBar';
import Spinner from '../Spinner';
import Share from '../Share';
import Toast from '../Toast';
import useSurvey from '../../hooks/useSurvey';
import useAuth from '../../hooks/useAuth';
import useToast from '../../hooks/useToast';
import useLoading from '../../hooks/useLoading';
import useAnimation from '../../hooks/useAnimation';
import { getAnalysisMbti } from '../../data/survey';
import { createSurvey } from '../../api/survey';
import createRequest from '../../utils/createRequest';

export default () => {
  const [idx, setIdx] = useState(0);
  const {
    list,
    select,
    mbti,
    onSurveySelect,
    onSurveySelectClear,
    onSurveySetMbti,
  } = useSurvey();

  const { loading } = useLoading();

  const { user } = useAuth();
  const history = useHistory();
  const { visible, animate, tick } = useAnimation();
  const { message, onToastOpen } = useToast();

  const onSelect = useCallback(
    (data) => {
      const len = list.length;
      if (idx <= len - 1) {
        setIdx(idx + 1);
        onSurveySelect(data);
      }
    },
    [idx, setIdx, onSurveySelect, list.length]
  );

  const onToast = useCallback(
    (text: string) => {
      tick();
      onToastOpen(text);
    },
    [tick, onToastOpen]
  );

  useEffect(() => {
    if (list.length === select.length && !mbti) {
      (async () => {
        const analysisMbti = getAnalysisMbti(select);

        onSurveySetMbti(analysisMbti);
        const request = createRequest('survey/SURVEY_CREATE', createSurvey);
        await request({
          uid: user?.uid,
          select,
          mbti: analysisMbti,
        });

        history.push(`/mbti/result`);
      })();
    }
  }, [
    list.length,
    select.length,
    select,
    mbti,
    user?.uid,
    onSurveySelectClear,
    onSurveySetMbti,
    history,
  ]);

  useEffect(() => {
    onSurveySetMbti('');
    onSurveySelectClear();
  }, [onSurveySetMbti, onSurveySelectClear]);

  return (
    <>
      <Share onToast={onToast} />
      <Layout>
        <Wrapper>
          <Title>
            <h1>당신을 표현하는</h1>
            <h1>단어로 알아보는</h1>
            <h1>MBTI</h1>
          </Title>
          <SubTitle>
            <p>
              <strong>두 단어중 자신에게 더 가깝다고 느껴지는 단어</strong>를
              선택해주세요.
            </p>
            <p>당신이 선택한 단어로 당신을 알아갑니다.</p>
          </SubTitle>
        </Wrapper>
        <ProgressBar progress={idx * (100 / 36)} />
        <Wrapper>
          <Survey list={list} idx={idx} onSelect={onSelect} />
        </Wrapper>
      </Layout>
      {loading['survey/SURVEY_CREATE'] && <Spinner />}
      {visible && <Toast animate={animate}>{message}</Toast>}
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
  justify-content: center;
  flex: 1;
  flex-direction: column;
  width: 100%;
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

const SubTitle = styled.div`
  margin-top: 2rem;
  p {
    font-size: 1.6rem;

    &:last-child {
      margin-top: 1rem;
    }
  }
`;
