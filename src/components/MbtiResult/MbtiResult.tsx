import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import useSurvey from '../../hooks/useSurvey';

export default () => {
  const { select, mbti } = useSurvey();
  const history = useHistory();

  useEffect(() => {
    if (!mbti) {
      history.push('/');
    }
  }, [mbti, history]);

  if (!mbti) return null;
  return <Wrapper>{select.length}</Wrapper>;
};

const Wrapper = styled.div``;
