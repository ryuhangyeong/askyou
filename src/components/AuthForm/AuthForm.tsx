import React, { useState } from 'react';
import styled from 'styled-components';
import { GrFacebook, GrGoogle, GrMail } from 'react-icons/gr';
import { RiKakaoTalkFill } from 'react-icons/ri';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import firebase from 'firebase';
import AuthLayout from './AuthLayout';
import { signUpApi, signInApi, oauthApi } from '../../api/auth';

interface Inputs {
  email: string;
  password: string;
}

declare global {
  interface Window {
    Kakao: any;
  }
}

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
});

export default () => {
  if (!window.Kakao.isInitialized()) {
    window.Kakao.init(process.env.REACT_APP_KAKAO_LOGIN);
  }

  const [authType, setAuthType] = useState(false);
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState({
    message: '',
  });

  const onOauthKakao = async (accessToken: string) => {
    // const data = await fetch(
    //   'http://localhost:5001/askyou-41efc/us-central1/OauthKakao',
    //   {
    //     method: 'POST',
    //     body: JSON.stringify({
    //       data: {
    //         accessToken,
    //       },
    //     }),
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //   }
    // );

    const data = await firebase.functions().httpsCallable('OauthKakao')({
      accessToken,
    });

    // const res = await data.json();

    console.log(data);
  };

  const onKakaoLogin = () => {
    window.Kakao.Auth.login({
      success(data: any) {
        const { access_token: accessToken } = data;
        (async () => {
          await onOauthKakao(accessToken);
        })();
      },
      fail() {},
    });
  };

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onOauth = async (type: string) => {
    try {
      const data = await oauthApi(type);
    } catch ({ code, credential: { providerId } }) {
      console.log(code);
      setError({ message: `${code}-${providerId}` });
    } finally {
      setTimeout(() => {
        if (!error.message) setError({ message: '' });
      }, 2000);
    }
  };

  const onSubmit = async ({ email, password }: Inputs) => {
    try {
      if (authType) await signInApi(email, password);
      else await signUpApi(email, password);
    } catch (e) {
      setError({ message: e.code });
    } finally {
      setTimeout(() => {
        if (!error.message) setError({ message: '' });
      }, 2000);
    }
  };

  const type = authType ? '로그인' : '회원가입';
  const reverseType = !authType ? '로그인' : '회원가입';

  return (
    <AuthLayout>
      <Wrapper>
        <button type="button" className="item" onClick={() => onKakaoLogin()}>
          <RiKakaoTalkFill />
          <em>카카오로 {type}</em>
        </button>
        <button
          type="button"
          className="item facebook"
          onClick={() => onOauth('Facebook')}
        >
          <GrFacebook />
          <em>페이스북으로 {type}</em>
          {error?.message ===
            'auth/account-exists-with-different-credential-facebook.com' && (
            <ErrorMessage className="already">
              이미 존재하는 이메일
            </ErrorMessage>
          )}
        </button>
        <button
          type="button"
          className="item google"
          onClick={() => onOauth('Google')}
        >
          <GrGoogle />
          <em>구글로 {type}</em>
          {error?.message ===
            'auth/account-exists-with-different-credential' && (
            <ErrorMessage className="already">
              이미 존재하는 이메일
            </ErrorMessage>
          )}
        </button>
        <span className="or">또는</span>

        {!visible ? (
          <button
            type="button"
            className="item email"
            onClick={() => setVisible(!visible)}
          >
            <GrMail />
            <em>이메일로 {type}</em>
          </button>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)}>
            <InputGroup>
              <Input
                type="text"
                name="email"
                placeholder="이메일을 입력하세요."
                ref={register}
              />
              {errors?.email?.type === 'required' && (
                <ErrorMessage className="required">
                  이메일은 필수입력
                </ErrorMessage>
              )}
              {errors?.email?.type === 'email' && (
                <ErrorMessage className="email">
                  올바르지 않은 이메일 형식
                </ErrorMessage>
              )}
              {error?.message === 'auth/email-already-in-use' && (
                <ErrorMessage className="already">
                  이미 존재하는 이메일
                </ErrorMessage>
              )}
            </InputGroup>
            <InputGroup>
              <Input
                type="password"
                name="password"
                autoComplete="new-password"
                placeholder="비밀번호를 입력하세요."
                ref={register}
              />
              {errors?.password?.type === 'min' && (
                <ErrorMessage className="required password">
                  비밀번호는 최소 6자 이상
                </ErrorMessage>
              )}
              {error?.message === 'auth/wrong-password' && (
                <ErrorMessage className="wrong-password">
                  잘못된 비밀번호
                </ErrorMessage>
              )}
            </InputGroup>
            <Button type="submit">{type} 하기</Button>
          </form>
        )}
        <p>
          <span>askyou가 처음이신가요?</span>
          <button
            type="button"
            className="auth"
            onClick={() => setAuthType(!authType)}
          >
            {reverseType}
          </button>
        </p>
      </Wrapper>
    </AuthLayout>
  );
};

const Wrapper = styled.div`
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

    button {
      border: none;
      margin-left: 1rem;
      background-color: inherit;
      font-weight: 700;
      cursor: pointer;
    }
  }

  .item {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #e0e0e0;
    border-radius: 2px;
    background-color: #fbfbfb;
    width: 100%;
    height: 5rem;
    cursor: pointer;
    font-weight: 100;

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
  }

  button + button {
    margin-top: 2rem;
  }
`;

const InputGroup = styled.div`
  position: relative;
  & + & {
    margin-top: 2rem;
  }
`;

const Input = styled.input`
  outline: none;
  border: none;
  border: 1px solid #e0e0e0;
  border-radius: 2px;
  padding-left: 1rem;
  width: 100%;
  height: 5rem;
  font-size: 1.4rem;
`;

const Button = styled.button`
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

  &:hover {
    border: 1px solid #f33;
    background-color: #f33;
    color: #fff;
  }
`;

const ErrorMessage = styled.span`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  border-radius: 3px;
  padding: 10px 20px;
  background-color: #1d1d1d;
  color: #fff;

  @media (min-width: 768px) {
    right: auto;
    &.required {
      left: -121px;
    }

    &.password {
      left: -150px;
    }

    &.email {
      left: -154px;
    }

    &.already {
      left: -132px;
    }

    &.wrong-password {
      left: -112px;
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
