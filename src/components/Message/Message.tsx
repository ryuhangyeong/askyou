import React from 'react';
import styled from 'styled-components';
import palette from '../../utils/palette';

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

const Wrapper = styled.span<MessageProps>`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  padding: 1rem 2rem;
  background-color: ${palette.gray[9]};
  color: #fff;
  width: ${({ width }) => (width ? `${width}` : '40px')};
`;
