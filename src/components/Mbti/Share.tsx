import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { FaShareAlt } from 'react-icons/fa';
import { FiPaperclip } from 'react-icons/fi';

export default () => {
  const [visible, setVisible] = useState(false);
  const onClick = () => setVisible(!visible);
  return (
    <Layout>
      <Wrapper onClick={onClick} visible={visible}>
        <span>
          <FaShareAlt />
        </span>
        <span>
          <FiPaperclip />
        </span>
        <span>
          <FiPaperclip />
        </span>
      </Wrapper>
    </Layout>
  );
};

const Layout = styled.div`
  position: absolute;
  top: 3rem;
  left: 3rem;
`;

interface WrapperProps {
  visible: boolean;
}

const Wrapper = styled.div<WrapperProps>`
  position: relative;

  ${({ visible }) =>
    visible &&
    css`
      span:nth-child(2) {
        transform: translateX(6rem);
      }

      span:nth-child(3) {
        transform: translateX(12rem);
      }
    `}

  span {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #adb5bd;
    border-radius: 50%;
    background-color: #fff;
    width: 5rem;
    height: 5rem;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:nth-child(1) {
      z-index: 1;
    }

    &:active,
    &:hover {
      border: 1px solid #212529;

      svg {
        color: #212529;
      }
    }

    svg {
      font-size: 2rem;
      color: #adb5bd;
      transition: all 0.2s ease-in-out;
    }
  }
`;
