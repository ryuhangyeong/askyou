import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { FaShareAlt } from 'react-icons/fa';
import { FiPaperclip } from 'react-icons/fi';
import { GrFacebook } from 'react-icons/gr';
import { RiKakaoTalkFill } from 'react-icons/ri';
import Message from '../Message';
import clipboard from '../../utils/clipboard';

export default () => {
  const [visible, setVisible] = useState(false);
  const onClick = () => setVisible(!visible);
  return (
    <Layout>
      <Wrapper visible={visible}>
        <div className="item" onClick={onClick}>
          <FaShareAlt />
          <Message className="message">공유하기</Message>
        </div>
        <div className="item">
          <GrFacebook />
          <Message className="message">페이스북</Message>
        </div>
        <div className="item">
          <RiKakaoTalkFill />
          <Message className="message">카카오</Message>
        </div>
        <div className="item" onClick={() => clipboard('링크 복사 테스트')}>
          <FiPaperclip />
          <Message className="message">주소복사</Message>
        </div>
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
      .item:nth-child(2) {
        transform: translateX(6rem);
        @media (max-width: 768px) {
          transform: translateY(6rem);
        }
      }

      .item:nth-child(3) {
        transform: translateX(12rem);
        @media (max-width: 768px) {
          transform: translateY(12rem);
        }
      }

      .item:nth-child(4) {
        transform: translateX(18rem);
        @media (max-width: 768px) {
          transform: translateY(18rem);
        }
      }
    `}

  .item {
    position: absolute;
    z-index: 999;
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

    &:active,
    &:hover {
      .message {
        display: flex;
      }
    }

    .message {
      display: none;
      right: -80px;

      @media (min-width: 768px) {
        right: auto;
        bottom: -40px;
      }

      &::after {
        display: block;
        position: absolute;
        top: 50%;
        left: -10px;
        transform: translateY(-50%);
        content: '';
        border-top: 5px solid transparent;
        border-right: 5px solid #1d1d1d;
        border-left: 5px solid transparent;
        border-bottom: 5px solid transparent;
        width: 0;
        height: 0;

        @media (min-width: 768px) {
          top: -10px;
          left: 50%;
          transform: translateX(-50%);
          border-top: 5px solid transparent;
          border-right: 5px solid transparent;
          border-left: 5px solid transparent;
          border-bottom: 5px solid #1d1d1d;
        }
      }
    }

    &:nth-child(1) {
      z-index: 1000;
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
