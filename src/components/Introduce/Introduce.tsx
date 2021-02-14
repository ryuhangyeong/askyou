import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Responsive from '../Responsive';
import MbtiItem from './MbtiItem';
import { getMBTIs } from '../../mbti/getMBTIs';

export default () => {
  const SIZE = 65;
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
        current.style.transform = `translateY(-${SIZE * idx}px)`;
        if (idx >= len - 1) {
          setTimeout(() => {
            current.style.transition = 'none';
            current.style.transform = 'none';
            setIdx(1);
          }, DURATION / 10);
        }
      }
    }, DURATION);

    return () => {
      clearInterval(timer);
    };
  }, [idx, len]);
  return (
    <Wrapper>
      <Inner>
        <h2 className="slide">
          <ul ref={ulElement}>
            {mbtis.map((mbti) => (
              <MbtiItem mbti={mbti} key={mbti.id} />
            ))}
          </ul>
        </h2>
        <span>에게</span>
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
  height: 500px;
  background-color: #e9ecef;
  color: #000;
  font-weight: 100;

  @media (max-width: 768px) {
    height: calc(100vh - 56px);
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
      width: 130px;
      height: 65px;
      line-height: 65px;

      ul {
        position: absolute;
        width: 100%;
        top: 0;
        transition: all 0.2s ease-in-out;
        li {
          text-align: center;
          height: 65px;

          span {
            display: block;
            height: inherit;
            background-color: #000;
            color: #fff;
            font-weight: 700;
          }
        }
      }
    }
  }
  span {
    vertical-align: top;
    line-height: 65px;
    font-size: 5rem;
    font-weight: 300;
  }
`;
