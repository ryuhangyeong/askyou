import React from 'react';
import styled from 'styled-components';

export interface AuthLayoutProps {
  children: React.ReactNode;
}

export default ({ children }: AuthLayoutProps) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  position: absolute;
  top: 7rem;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
