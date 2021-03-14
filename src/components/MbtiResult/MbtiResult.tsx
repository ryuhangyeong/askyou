import React, { useEffect } from 'react';
import styled from 'styled-components';
import useSurvey from '../../hooks/useSurvey';

export default ({ history }: any) => {
  const { select, mbti } = useSurvey();
  useEffect(() => {
    if (!mbti) history.push('/');
  }, [mbti, history]);
  return <Wrapper>{select.length}</Wrapper>;
};

const Wrapper = styled.div``;
