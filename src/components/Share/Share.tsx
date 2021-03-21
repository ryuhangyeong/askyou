import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { FaShareAlt } from 'react-icons/fa';
import { FiPaperclip } from 'react-icons/fi';
import { GrFacebook } from 'react-icons/gr';
import { RiKakaoTalkFill } from 'react-icons/ri';
import Message from '../Message';
import clipboard from '../../utils/clipboard';
import { getUrl } from '../../utils/url';
import useToast from '../../hooks/useToast';
import palette from '../../utils/palette';

export default () => {
  const [visible, setVisible] = useState(false);
  const onClick = () => setVisible(!visible);
  const { onToast } = useToast();

  const onClipBoard = (mode: string) => {
    if (mode === 'facebook') {
      console.log('facebook');
    } else if (mode === 'kakao') {
      console.log('kakao');
    } else if (mode === 'url') {
      clipboard(getUrl());
      onToast('링크가 복사되었습니다.');
    }
    setVisible(false);
  };
  return (
    <Layout>
      <Wrapper visible={visible}>
        <button type="button" className="item" onClick={onClick}>
          <FaShareAlt />
          {visible && <Message className="message">공유하기</Message>}
        </button>
        <button
          type="button"
          className="item"
          onClick={() => onClipBoard('facebook')}
        >
          <GrFacebook />
          {visible && <Message className="message">페이스북</Message>}
        </button>
        <button
          type="button"
          className="item"
          onClick={() => onClipBoard('kakao')}
        >
          <RiKakaoTalkFill />
          {visible && <Message className="message">카카오</Message>}
        </button>
        <button
          type="button"
          className="item"
          onClick={() => onClipBoard('url')}
        >
          <FiPaperclip />
          {visible && <Message className="message">주소 복사</Message>}
        </button>
      </Wrapper>
    </Layout>
  );
};

const Layout = styled.div`
  display: none;

  @media (min-width: 768px) {
    position: absolute;
    top: 3rem;
    left: 3rem;
    display: block;
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
      }

      .item:nth-child(3) {
        transform: translateX(12rem);
      }

      .item:nth-child(4) {
        transform: translateX(18rem);
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
    &:focus,
    &:hover {
      .message {
        display: flex;
      }
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

    &:nth-child(1) {
      z-index: 1000;
    }

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
  }
`;
