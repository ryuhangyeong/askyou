import React from 'react';
import styled, { css } from 'styled-components';
import { FaShareAlt } from 'react-icons/fa';
import { FiPaperclip } from 'react-icons/fi';
import { GrFacebook } from 'react-icons/gr';
import { RiKakaoTalkFill } from 'react-icons/ri';
import Message from '../Message';
import clipboard from '../../utils/clipboard';
import { getUrl } from '../../utils/url';
import palette from '../../utils/palette';
import useAnimation from '../../hooks/useAnimation';

export interface ShareProps {
  onToast: (text: string) => void;
}
export default ({ onToast }: ShareProps) => {
  const { visible, animate, open, close } = useAnimation();
  const onClick = () => {
    if (visible) close();
    else open();
  };

  const onClipBoard = (mode: string) => {
    if (mode === 'facebook') {
      console.log('facebook');
    } else if (mode === 'kakao') {
      console.log('kakao');
    } else if (mode === 'url') {
      clipboard(getUrl());
      onToast('링크가 복사되었습니다.');
    }
    close();
  };
  return (
    <Layout>
      <Wrapper>
        <button type="button" className="item" onClick={onClick}>
          <FaShareAlt />
          <Message className="message">공유하기</Message>
        </button>
        {visible && (
          <Inner animate={animate}>
            <button
              type="button"
              className="item"
              onClick={() => onClipBoard('facebook')}
            >
              <GrFacebook />
              <Message className="message">페이스북</Message>
            </button>
            <button
              type="button"
              className="item"
              onClick={() => onClipBoard('kakao')}
            >
              <RiKakaoTalkFill />
              <Message className="message">카카오</Message>
            </button>
            <button
              type="button"
              className="item"
              onClick={() => onClipBoard('url')}
            >
              <FiPaperclip />
              <Message className="message">주소 복사</Message>
            </button>
          </Inner>
        )}
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

const Wrapper = styled.div`
  position: relative;

  .item {
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

export interface IInner {
  animate: boolean;
}

const Inner = styled.div<IInner>`
  position: relative;
  z-index: 999;

  .item:nth-child(1) {
    animation: slide-in-1 0.6s 1;
    animation-fill-mode: forwards;
  }

  .item:nth-child(2) {
    animation: slide-in-2 0.6s 1;
    animation-fill-mode: forwards;
  }

  .item:nth-child(3) {
    animation: slide-in-3 0.6s 1;
    animation-fill-mode: forwards;
  }

  ${({ animate }) =>
    animate &&
    css`
      .item:nth-child(1) {
        animation: slide-out-1 0.6s 1;
      }

      .item:nth-child(2) {
        animation: slide-out-2 0.6s 1;
      }

      .item:nth-child(3) {
        animation: slide-out-3 0.6s 1;
      }
    `}

  @keyframes slide-in-1 {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(6rem);
    }
  }

  @keyframes slide-in-2 {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(12rem);
    }
  }

  @keyframes slide-in-3 {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(18rem);
    }
  }

  @keyframes slide-out-1 {
    from {
      transform: translateX(6rem);
    }
    to {
      transform: translateX(0);
    }
  }

  @keyframes slide-out-2 {
    from {
      transform: translateX(12rem);
    }
    to {
      transform: translateX(0);
    }
  }

  @keyframes slide-out-3 {
    from {
      transform: translateX(18rem);
    }
    to {
      transform: translateX(0);
    }
  }
`;
