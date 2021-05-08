import React from 'react';
import styled from 'styled-components';

export interface AuthLayoutProps {
  children: React.ReactNode;
}

export default ({ children }: AuthLayoutProps) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 7rem);
`;
