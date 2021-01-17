import React from 'react';
import styled from 'styled-components';
import Responsive from './Responsive';

const HeaderBlock = styled.header`
  position: fixed;
  border-bottom: 1px solid #ccc;
  width: 100%;
  background-color: #fff;
`;

const Wrapper = styled(Responsive)`
  display: flex;
  align-items: center;
  height: 6rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
`;

const Logo = styled.h1`
  margin: 0;
  color: #5f6368;
  font-weight: 100;
  font-size: 2rem;
`;

const Header = () => {
  return (
    <HeaderBlock>
      <Wrapper>
        <Logo>askyou</Logo>
      </Wrapper>
    </HeaderBlock>
  );
};

export default Header;
