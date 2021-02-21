import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Responsive from '../Responsive';
import MbtiItem from './MbtiItem';
import { getMBTIs } from '../../mbti/getMBTIs';

export default () => {
  const SIZE = 6.5;
  const DURATION = 2000;
  const [idx, setIdx] = useState(1);
  const ulElement = useRef<HTMLUListElement>(null);

  const mbtis = getMBTIs.concat({
    ...getMBTIs[0],
    id: getMBTIs[getMBTIs.length - 1].id + 1,
  });

  const len = mbtis.length;

  useEffect(() => {
    const timer = setInterval(() => {
      const { current } = ulElement;

      if (current !== null) {
        setIdx(idx + 1);
        current.style.transition = `all ${DURATION / 10000}s ease-in-out`;
        current.style.transform = `translateY(-${SIZE * idx}rem)`;
        if (idx >= len - 1) {
          setTimeout(() => {
            current.style.transition = 'none';
            current.style.transform = 'none';
            setIdx(1);
          }, DURATION / 10);
        }
      }
    }, DURATION);
    return () => clearInterval(timer);
  }, [idx, len]);

  return (
    <Wrapper>
      <Inner>
        <h2>여러분이</h2>
        <h2 className="slide">
          <ul ref={ulElement}>
            {mbtis.map((mbti) => (
              <MbtiItem mbti={mbti} key={mbti.id} />
            ))}
          </ul>
        </h2>
        <span className="to">에게</span>
        <h2>궁금한 모든 것을 질문하세요.</h2>
      </Inner>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  width: 100%;
  height: calc(100vh - 7rem);
  background-color: #e9ecef;
  color: #000;
  font-weight: 100;

  @media (min-width: 768px) {
    height: 50rem;
  }
`;

const Inner = styled(Responsive)`
  h2 {
    font-size: 5rem;
    font-weight: 300;

    &.slide {
      position: relative;
      overflow: hidden;
      display: inline-block;
      width: 14.5rem;
      height: 6.5rem;
      line-height: 6.5rem;

      ul {
        position: absolute;
        width: 100%;
        top: 0;
        transition: all 0.2s ease-in-out;
      }
    }
  }

  .to {
    vertical-align: top;
    line-height: 6.5rem;
    font-size: 5rem;
    font-weight: 300;
  }
`;
