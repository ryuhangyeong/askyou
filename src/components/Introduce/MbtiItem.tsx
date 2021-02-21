import React from 'react';
import styled from 'styled-components';
import { MBTI } from '../../mbti/getMBTIs';

export type MbtiItemProps = {
  mbti: MBTI;
};

export default ({ mbti }: MbtiItemProps) => (
  <Wrapper>
    <span>{mbti.type}</span>
  </Wrapper>
);

const Wrapper = styled.li`
  text-align: center;
  height: 6.5rem;

  span {
    display: block;
    height: inherit;
    background-color: #000;
    color: #fff;
    font-weight: 700;
  }
`;
