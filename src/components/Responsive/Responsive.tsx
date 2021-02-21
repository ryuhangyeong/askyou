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
  width: 100%;

  @media (min-width: 788px) {
    width: 768px;
  }

  @media (min-width: 1048px) {
    width: 1024px;
  }
`;
