import React, { useState } from 'react';
import styled from 'styled-components';
import Responsive from '../Responsive';
import Survey from './Survey';

export default () => {
  const [mode, setMode] = useState(false);
  const onClick = () => setMode(true);
  return (
    <Layout>
      <Wrapper>
        <Title>
          <h1>당신을 표현하는</h1>
          <h1>단어로 알아보는</h1>
          <h1>MBTI</h1>
        </Title>
      </Wrapper>
      <Wrapper className="center">
        {mode ? (
          <Survey />
        ) : (
          <Button type="submit" onClick={onClick}>
            알아가기
          </Button>
        )}
      </Wrapper>
    </Layout>
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
  }

  &::before {
    left: -3rem;
  }

  &::after {
    right: -2.5rem;
  }
`;

const Button = styled.button`
  padding: 2rem 6rem;
  background-color: #fff;
  border: 1px solid #f33;
  color: #f33;
  font-size: 2rem;
  cursor: pointer;

  &:active,
  &:hover {
    background-color: #f33;
    color: #fff;
  }
`;
