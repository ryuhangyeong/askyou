import React from 'react';
import styled, { css } from 'styled-components';
import Message from '../Message';

export interface ToastProps {
  children: React.ReactNode;
  animate: boolean;
}

export default ({ children, animate, ...rest }: ToastProps) => {
  return (
    <Layout animate={animate}>
      <Wrapper className="toast" width="auto" {...rest}>
        {children}
      </Wrapper>
    </Layout>
  );
};

const Layout = styled.div<ToastProps>`
  position: fixed;
  top: auto;
  right: 1rem;
  bottom: 1rem;
  left: 1rem;
  animation: slide-in--mobile 0.6s 1;

  ${({ animate }) =>
    animate &&
    css`
      animation: slide-out--mobile 0.6s 1;
      animation-fill-mode: forwards;
    `}

  @keyframes slide-in--mobile {
    from {
      transform: translateY(30rem);
    }
    to {
      transform: translateY(0);
    }
  }

  @keyframes slide-out--mobile {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(30rem);
    }
  }

  @media (min-width: 768px) {
    top: 3rem;
    right: 3rem;
    bottom: auto;
    left: auto;
    animation: slide-in--pc 0.6s 1;

    ${({ animate }) =>
      animate &&
      css`
        animation: slide-out--pc 0.6s 1;
        animation-fill-mode: forwards;
      `}

    @keyframes slide-in--pc {
      from {
        transform: translateX(30rem);
      }
      to {
        transform: translateX(0);
      }
    }

    @keyframes slide-out--pc {
      from {
        transform: translateX(0);
      }
      to {
        transform: translateX(30rem);
      }
    }
  }
`;

const Wrapper = styled(Message)`
  position: relative;
  font-size: 1.6rem;

  &.toast {
    height: 4rem;
  }
`;
