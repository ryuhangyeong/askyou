import React from 'react';
import styled from 'styled-components';

export default () => {
  return (
    <Layout>
      <Wrapper type="button">
        <span className="word">결혼.</span>
      </Wrapper>
      <Wrapper type="button">
        <span className="word">연애.</span>
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
      font-size: 10rem;
    }
  }
`;
