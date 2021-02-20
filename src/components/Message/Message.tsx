import React from 'react';
import styled from 'styled-components';

export interface MessageProps {
  children: React.ReactNode;
  className: string;
  width?: string;
}

export default ({ children, className, ...rest }: MessageProps) => (
  <Wrapper className={className} {...rest}>
    {children}
  </Wrapper>
);

const Wrapper = styled.span`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  padding: 1rem 2rem;
  background-color: #1d1d1d;
  color: #fff;
  width: ${({ width }: MessageProps) => (width ? `${width}` : '40px')};
`;
