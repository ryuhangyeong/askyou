import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { FaShareAlt } from 'react-icons/fa';
import { FiPaperclip } from 'react-icons/fi';
import { GrFacebook } from 'react-icons/gr';
import { RiKakaoTalkFill } from 'react-icons/ri';
import clipboard from '../../utils/clipboard';

export default () => {
  const [visible, setVisible] = useState(false);
  const onClick = () => setVisible(!visible);
  return (
    <Layout>
      <Wrapper visible={visible}>
        <span onClick={onClick}>
          <FaShareAlt />
        </span>
        <span>
          <GrFacebook />
        </span>
        <span>
          <RiKakaoTalkFill />
        </span>
        <span onClick={() => clipboard('링크 복사 테스트')}>
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

  @media (max-width: 768px) {
    top: 1.5rem;
    left: 1.5rem;
  }
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
        @media (max-width: 768px) {
          transform: translateY(6rem);
        }
      }

      span:nth-child(3) {
        transform: translateX(12rem);
        @media (max-width: 768px) {
          transform: translateY(12rem);
        }
      }

      span:nth-child(4) {
        transform: translateX(18rem);
        @media (max-width: 768px) {
          transform: translateY(18rem);
        }
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
