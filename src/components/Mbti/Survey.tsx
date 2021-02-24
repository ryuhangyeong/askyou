import React from 'react';
import styled from 'styled-components';
import { ISurvey, ISurveyItem } from '../../data/survey';

export interface SurveyProps {
  list: ISurvey[];
  idx: number;
  onSelect: (type: ISurveyItem) => void;
}

export default ({ list, idx, onSelect }: SurveyProps) => {
  return (
    <Layout>
      <Wrapper type="button" onClick={() => onSelect(list[idx]?.A)}>
        <span className="word">{list[idx]?.A?.title}</span>
      </Wrapper>
      <Wrapper type="button" onClick={() => onSelect(list[idx]?.B)}>
        <span className="word">{list[idx]?.B?.title}</span>
      </Wrapper>
    </Layout>
  );
};

const Layout = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 2rem;
  border: 1px solid #eee;
  background-color: #fff;
  width: 100%;
  height: 100%;

  @media (min-width: 768px) {
    flex-direction: column;
    margin-bottom: 0;
    height: 100vh;
  }
`;

const Wrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  border: none;
  background-color: inherit;
  cursor: pointer;

  & + & {
    border-top: none;
    border-left: 1px solid #eee;

    @media (min-width: 768px) {
      border-top: 1px solid #eee;
      border-left: none;
    }
  }

  &:active,
  &:hover {
    background-color: #f1f3f5;
  }

  .word {
    font-size: 5rem;
    font-weight: 700;

    @media (min-width: 768px) {
      font-size: 8rem;
    }
  }
`;
