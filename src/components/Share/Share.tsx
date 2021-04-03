import React from 'react';
import styled from 'styled-components';
import palette from '../../utils/palette';

export interface ShareProps {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
}

export default ({ children, disabled, onClick }: ShareProps) => {
  return (
    <Wrapper
      type="button"
      className="item"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${palette.gray[3]};
  border-radius: 50%;
  background-color: #fff;
  width: 5rem;
  height: 5rem;
  cursor: pointer;

  &:active,
  &:focus,
  &:hover {
    border: 1px solid ${palette.gray[9]};

    .message {
      display: flex;
    }

    svg {
      color: ${palette.gray[9]};
    }

    &:disabled {
      border: 1px solid ${palette.gray[3]};

      svg {
        color: ${palette.gray[3]};
      }
    }
  }

  &:disabled {
    background-color: ${palette.gray[2]};
  }

  .message {
    display: none;
    width: 6rem;
    font-size: 1.5rem;
    right: auto;
    bottom: -45px;

    &::after {
      display: block;
      content: '';
      position: absolute;
      top: -10px;
      left: 50%;
      transform: translateX(-50%);
      border-top: 5px solid transparent;
      border-right: 5px solid transparent;
      border-left: 5px solid transparent;
      border-bottom: 5px solid ${palette.gray[9]};
    }
  }

  svg {
    font-size: 2rem;
    color: ${palette.gray[3]};
    transition: all 0.2s ease-in-out;
  }
`;
