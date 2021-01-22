import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import queryString from 'query-string';

import styled from 'styled-components';
import { GrFacebook, GrGoogle, GrMail } from 'react-icons/gr';
import NaverLogo from './naver_square_logo.png';

const AuthFormBlock = styled.div`
  box-shadow: 0 18px 54px 0 rgba(0, 0, 0, 0.14);
  background-color: #fff;
  padding: 4rem;
  width: 40rem;
  text-align: center;

  .or {
    position: relative;
    display: inline-block;
    margin: 2rem 0;
  }

  p {
    margin-top: 3rem;
    font-weight: 300;
    font-size: 1.3rem;

    a {
      margin-left: 1rem;
      font-weight: 700;
    }
  }
`;

const AuthType = styled.ul``;

const AuthTypeItem = styled.li`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #e0e0e0;
  border-radius: 2px;
  background-color: #fbfbfb;
  height: 5rem;
  cursor: pointer;
  font-weight: 100;

  & + & {
    margin-top: 2rem;
  }

  &.naver {
    img {
      color: #3eaf0e;
      font-weight: 700;
    }
  }

  &.facebook {
    svg {
      color: #4267b2;
    }
  }

  &.google {
    svg {
      color: #dd4b39;
    }
  }

  &.email {
    border: 1px solid rgb(138, 140, 155);
    background-color: #8a8c9b;
    color: #fff;

    svg {
      color: #fff;
    }
  }

  em {
    font-size: 1.4rem;
  }

  svg,
  img {
    position: absolute;
    left: 2rem;
    font-size: 2rem;
  }
`;

const InputGroup = styled.div`
  position: relative;
  & + & {
    margin-top: 2rem;
  }
`;

const StyledInput = styled.input`
  outline: none;
  border: none;
  border: 1px solid #e0e0e0;
  border-radius: 2px;
  padding-left: 1rem;
  width: 100%;
  height: 5rem;
  font-size: 1.4rem;
`;

const StyledButton = styled.button`
  outline: none;
  border: none;
  margin-top: 2rem;
  border: 1px solid #f33;
  border-radius: 2px;
  background-color: #fff;
  width: 100%;
  height: 5rem;
  color: #f33;
  font-size: 1.7rem;
  cursor: pointer;
`;

const HelperMessage = styled.span`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 3px;
  padding: 10px 20px;
  background-color: #1d1d1d;
  color: #fff;

  &.email {
    left: auto;
    right: 10px;
    @media (min-width: 768px) {
      left: -109px;
      right: auto;
    }
  }

  &.password {
    left: auto;
    right: 10px;
    @media (min-width: 768px) {
      left: -117px;
      right: auto;
    }
  }

  &::after {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: -10px;
    display: block;
    content: '';
    width: 0;
    height: 0;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-right: 5px solid transparent;
    border-left: 5px solid #1d1d1d;
  }
`;

const AuthForm = () => {
  const { search } = useLocation();
  const { type } = queryString.parse(search);
  const [visibleForm, toggleVisibleForm] = useState(false);
  const [error, setError] = useState({ email: '', password: '' });

  // @TODO 개선 방안 생각하기
  const mode = type === 'sign_in' ? '로그인' : '회원가입';
  const reverseMode = type === 'sign_in' ? '회원가입' : '로그인';

  const inputEl = useRef(null);

  useEffect(() => {
    if (inputEl.current) inputEl.current.focus();
  }, [visibleForm]);

  // @TODO 해당 로직의 정당성 파악하기, 미디어 쿼리로 해결 가능한 로직 아닌가?
  useEffect(() => {
    const handleResize = () => {
      console.log('resize');
      setError({ email: '', password: '' });
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [visibleForm]);

  const onSubmit = (e) => {
    e.preventDefault();
    setError({ email: '잘못된 이메일', password: '잘못된 비밀번호' });

    setTimeout(() => {
      setError({ email: '', password: '' });
    }, 2000);
  };

  return (
    <AuthFormBlock>
      <AuthType>
        <AuthTypeItem className="naver">
          <img src={NaverLogo} alt="네이버 로고" />
          <em>네이버로 {mode}</em>
        </AuthTypeItem>
        <AuthTypeItem className="facebook">
          <GrFacebook />
          <em>페이스북으로 {mode}</em>
        </AuthTypeItem>
        <AuthTypeItem className="google">
          <GrGoogle />
          <em>구글로 {mode}</em>
        </AuthTypeItem>
      </AuthType>
      <span className="or">또는</span>
      {visibleForm || (
        <AuthType>
          <AuthTypeItem
            className="email"
            onClick={() => toggleVisibleForm(!visibleForm)}
          >
            <GrMail />
            <em>이메일로 {mode}</em>
          </AuthTypeItem>
        </AuthType>
      )}
      {visibleForm && (
        <form onSubmit={onSubmit}>
          <InputGroup>
            <StyledInput
              type="text"
              name="email"
              placeholder="이메일을 입력하세요."
              ref={inputEl}
            />
            {error.email && (
              <HelperMessage className="email">{error.email}</HelperMessage>
            )}
          </InputGroup>
          <InputGroup>
            <StyledInput
              type="password"
              autoComplete="new-password"
              name="password"
              placeholder="비밀번호를 입력하세요."
            />
            {error.password && (
              <HelperMessage className="password">
                {error.password}
              </HelperMessage>
            )}
          </InputGroup>
          <StyledButton>{mode} 하기</StyledButton>
        </form>
      )}
      <p>
        <span>askyou가 처음이신가요?</span>{' '}
        <Link to={`/auth?type=${type === 'sign_in' ? 'sign_up' : 'sign_in'}`}>
          {reverseMode}
        </Link>
      </p>
    </AuthFormBlock>
  );
};

export default AuthForm;
