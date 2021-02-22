import React from 'react';
import styled from 'styled-components';

export interface ProgressBarProps {
  progress?: number;
}

export default ({ ...rest }: ProgressBarProps) => (
  <Layout>
    <Wrapper {...rest} />
  </Layout>
);

const Layout = styled.div`
  position: relative;
  background-color: inherit;
  width: 100%;
  height: 1.1rem;
  overflow: hidden;

  @media (min-width: 768px) {
    width: 1.1rem;
    height: 100vh;
  }
`;

const Wrapper = styled.div<ProgressBarProps>`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #333;
  width: ${({ progress }) => (progress ? `${progress}%` : '0')};
  height: 100%;
  transition: width 0.5s ease-in-out;

  @media (min-width: 768px) {
    width: 100%;
    height: ${({ progress }) => (progress ? `${progress}%` : '0')};
    transition: height 0.5s ease-in-out;
  }
`;
