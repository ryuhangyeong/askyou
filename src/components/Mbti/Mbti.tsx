import React from 'react';
import styled from 'styled-components';
import Responsive from '../Responsive';
import Share from './Share';
import Survey from './Survey';

export default () => {
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
          <Survey />
        </Wrapper>
      </Layout>
    </>
  );
};

const Layout = styled(Responsive)`
  display: flex;
  align-items: center;
  height: 100vh;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex: 1;

  @media (max-width: 768px) {
    align-items: center;
  }

  &.center {
    justify-content: center;
    width: 100%;
  }
`;

const Title = styled.div`
  position: relative;
  display: inline-block;

  h1 {
    font-size: 5.5rem;
    font-weight: 300;

    @media (max-width: 768px) {
      font-size: 4rem;
      line-height: 5.5rem;
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

    @media (max-width: 1024px) {
      display: none;
    }

    @media (max-width: 768px) {
      top: -3rem;
      display: block;
    }

    @media (max-width: 330px) {
      display: none;
    }
  }

  &::before {
    left: -3rem;
  }

  &::after {
    right: -2.5rem;
  }
`;
