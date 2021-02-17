import React from 'react';
import styled from 'styled-components';

export default () => {
  return (
    <Layout>
      <Wrapper>
        <span className="word">결혼.</span>
      </Wrapper>
      <Wrapper>
        <span className="word">연애.</span>
      </Wrapper>
    </Layout>
  );
};

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: #fff;
  border-left: 1px solid #eee;
  border-right: 1px solid #eee;

  @media (max-width: 768px) {
    flex-direction: row;
    height: 100%;
    margin-bottom: 2rem;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  cursor: pointer;

  & + & {
    border-top: 1px solid #eee;

    @media (max-width: 768px) {
      border-top: none;
      border-left: 1px solid #eee;
    }
  }

  &:active,
  &:hover {
    background-color: #f1f3f5;
  }

  .word {
    font-size: 10rem;
    font-weight: 700;
    @media (max-width: 768px) {
      font-size: 5rem;
    }
  }
`;
