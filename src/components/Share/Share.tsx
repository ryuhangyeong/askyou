import React from 'react';
import styled from 'styled-components';
import palette from '../../utils/palette';

export interface ShareProps {
  children: React.ReactNode;
  onClick: () => void;
}

export default ({ children, onClick }: ShareProps) => {
  return (
    <Wrapper type="button" className="item" onClick={onClick}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #adb5bd;
  border-radius: 50%;
  background-color: #fff;
  width: 5rem;
  height: 5rem;
  cursor: pointer;

  &:active,
  &:hover {
    border: 1px solid ${palette.gray[9]};

    svg {
      color: ${palette.gray[9]};
    }
  }

  svg {
    font-size: 2rem;
    color: #adb5bd;
    transition: all 0.2s ease-in-out;
  }
`;
