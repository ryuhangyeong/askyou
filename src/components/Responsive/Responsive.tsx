import React from 'react';
import styled from 'styled-components';

export interface ResponsiveProps {
  children: React.ReactNode;
}

export default ({ children, ...rest }: ResponsiveProps) => (
  <Wrapper {...rest}>{children}</Wrapper>
);

const Wrapper = styled.div`
  margin: 0 auto;
  box-sizing: border-box;
  padding: 0 1rem;
  width: 1024px;
  @media (max-width: 1024px) {
    width: 768px;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;
