import React from 'react';
import styled from 'styled-components';
import { BsQuestionCircle } from 'react-icons/bs';
import { ISurvey, ISurveyItem } from '../../data/survey';
import Message from '../Message';

export interface SurveyProps {
  list: ISurvey[];
  idx: number;
  onSelect: (type: ISurveyItem) => void;
}

export default ({ list, idx, onSelect }: SurveyProps) => {
  return (
    <Layout>
      <Wrapper type="button" onClick={() => onSelect(list[idx]?.A)}>
        <Word>{list[idx]?.A?.title}</Word>
        {list[idx]?.A?.description && (
          <Helper onClick={(e) => e.stopPropagation()}>
            <label htmlFor={`${list[idx].A.title}`}>
              <BsQuestionCircle />
              <input type="checkbox" id={`${list[idx]?.A?.title}`} />
              <Message className="message">{list[idx]?.A?.description}</Message>
            </label>
          </Helper>
        )}
      </Wrapper>
      <Wrapper type="button" onClick={() => onSelect(list[idx]?.B)}>
        <Word>{list[idx]?.B?.title}</Word>
        {list[idx]?.B?.description && (
          <Helper onClick={(e) => e.stopPropagation()}>
            <label htmlFor={`${list[idx].B.title}`}>
              <BsQuestionCircle />
              <input type="checkbox" id={`${list[idx]?.B?.title}`} />
              <Message className="message">{list[idx]?.B?.description}</Message>
            </label>
          </Helper>
        )}
      </Wrapper>
    </Layout>
  );
};

const Layout = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem;
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
  position: relative;
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
`;

const Word = styled.span`
  font-size: 5rem;
  font-weight: 700;

  @media (min-width: 768px) {
    font-size: 8rem;
  }
`;

const Helper = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;

  label {
    display: block;

    .message {
      display: none;
      max-width: 100px;
    }

    input[type='checkbox'] {
      display: none;

      &:checked + .message {
        position: absolute;
        right: 0;
        display: block;
      }
    }
  }

  p {
    display: none;
  }

  svg {
    font-size: 3rem;
    cursor: pointer;
  }
`;
