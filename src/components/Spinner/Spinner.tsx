import React from 'react';
import styled from 'styled-components';

export default () => {
  return (
    <Layout>
      <Wrapper>
        <span />
        <span />
        <span />
        <span />
      </Wrapper>
    </Layout>
  );
};

const Layout = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

const Wrapper = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  span {
    position: absolute;
    top: 33px;
    border-radius: 50%;
    background-color: #f33;
    width: 13px;
    height: 13px;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
    &:nth-child(1) {
      left: 8px;
      animation: loader1 0.6s infinite;
    }
    &:nth-child(2) {
      left: 8px;
      animation: loader2 0.6s infinite;
    }
    &:nth-child(3) {
      left: 32px;
      animation: loader2 0.6s infinite;
    }
    &:nth-child(4) {
      left: 56px;
      animation: loader3 0.6s infinite;
    }
    @keyframes loader1 {
      0% {
        transform: scale(0);
      }
      100% {
        transform: scale(1);
      }
    }
    @keyframes loader2 {
      0% {
        transform: translate(0, 0);
      }
      100% {
        transform: translate(24px, 0);
      }
    }
    @keyframes loader3 {
      0% {
        transform: scale(1);
      }
      100% {
        transform: scale(0);
      }
    }
  }
`;
