import React from 'react';
import styled from 'styled-components';
import { GrFacebook } from 'react-icons/gr';

const AuthFormBlock = styled.div`
  text-align: center;

  .title {
    font-size: 3rem;
    font-weight: 100;
  }

  .description {
    margin: 4.5rem 0;
    color: #72757a;
    font-size: 1.5rem;
  }
`;

const AuthType = styled.ul`
  width: 50rem;
`;

const AuthTypeItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ddd;
  height: 6rem;
  cursor: pointer;

  & + & {
    margin-top: 2rem;
  }

  svg {
    margin-right: 2rem;
    color: #4267b2;
    font-size: 2rem;
  }
`;

const AuthForm = () => {
  return (
    <AuthFormBlock>
      <h2 className="title">통합 로그인</h2>
      <p className="description">로그인을 통해 질문해보세요!</p>
      <AuthType>
        <AuthTypeItem>
          <GrFacebook />
          <em>페이스북으로 로그인</em>
        </AuthTypeItem>
        <AuthTypeItem>
          <em>구글로 로그인</em>
        </AuthTypeItem>
        <AuthTypeItem>
          <em>이메일/아이디로 로그인</em>
        </AuthTypeItem>
      </AuthType>
    </AuthFormBlock>
  );
};

export default AuthForm;
