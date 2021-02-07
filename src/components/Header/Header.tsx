import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Responsive from '../Responsive';

export default () => {
  return (
    <>
      <Layout>
        <Wrapper>
          <Logo>
            <Link to="/">askyou</Link>
          </Logo>
          <Right>
            <Link to="/auth" className="login">
              로그인
            </Link>
          </Right>
        </Wrapper>
      </Layout>
      <Spacer />
    </>
  );
};

const Layout = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: 0 1px 0 0 rgba(17, 17, 17, 0.09);
  background-color: #fff;
  width: 100%;
`;

const Wrapper = styled(Responsive)`
  display: flex;
  align-items: center;
  height: 7rem;
`;

const Logo = styled.h1`
  a {
    font-family: 'Kalam-Regular', sans-serif;
    font-weight: 400;
    font-size: 2rem;
  }
`;

const Right = styled.div`
  margin-left: auto;
  .login {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 6rem;
    height: 7rem;
    color: #333;
    font-size: 1.6rem;
    &:hover {
      background-color: rgba(0, 0, 0, 0.05);
    }
  }
`;

const Spacer = styled.div`
  height: 7rem;
`;
