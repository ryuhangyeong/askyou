import React from 'react';
import styled from 'styled-components';
import Responsive from './Responsive';
import { Link } from 'react-router-dom';

const HeaderBlock = styled.header`
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
  font-family: 'Roboto', sans-serif;
  font-weight: 100;
  font-size: 2rem;
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
  height: 6rem;
`;

const Header = () => {
  return (
    <>
      <HeaderBlock>
        <Wrapper>
          <Logo>
            <Link to="/">askyou</Link>
          </Logo>
          <Right>
            <Link to="/auth?type=sign_in" className="login">
              로그인
            </Link>
          </Right>
        </Wrapper>
      </HeaderBlock>
      <Spacer />
    </>
  );
};

export default Header;
