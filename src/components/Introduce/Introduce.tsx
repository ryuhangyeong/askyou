import React from 'react';
import styled from 'styled-components';
import Responsive from '../Responsive';

export default () => {
  return (
    <Wrapper>
      <Inner>
        <h2>여러분이</h2>
        <h2>
          <span>INFP</span> 에게
        </h2>
        <h2>궁금한 모든 것을 물어보세요.</h2>
      </Inner>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
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

    span {
      display: inline-block;
      padding: 0 10px;
      background-color: #000;
      color: #fff;
      font-weight: 700;
    }
  }
`;
