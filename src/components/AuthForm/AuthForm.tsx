import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { GrFacebook, GrGoogle, GrMail } from 'react-icons/gr';
import { RiKakaoTalkFill } from 'react-icons/ri';
import styled from 'styled-components';
import firebase from 'firebase';
import AuthLayout from './AuthLayout';
import Message from '../Message';
import { signUpApi, signInApi, oauthApi } from '../../api/auth';
import kakaoLogin from '../../functions/kakaoLogin';
import useAuth from '../../hooks/useAuth';

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

  const { onAuthLoadingPromise } = useAuth();
  const [authType, setAuthType] = useState(false);
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState({
    message: '',
  });

  const history = useHistory();

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onOauthKakao = async (accessToken: string) => {
    const token = await kakaoLogin(accessToken);
    await firebase.auth().signInWithCustomToken(token?.data?.firebaseToken);
  };

  const onKakaoLogin = () => {
    window.Kakao.Auth.login({
      success(data: any) {
        const { access_token: accessToken } = data;
        (async () => {
          onAuthLoadingPromise(async () => {
            await onOauthKakao(accessToken);
            history.push('/');
          });
        })();
      },
      fail() {},
    });
  };

  const onOauth = async (type: string) => {
    try {
      onAuthLoadingPromise(async () => {
        await oauthApi(type);
        history.push('/');
      });
    } catch ({ code, credential: { providerId } }) {
      setError({ message: `${code}-${providerId}` });
    }
  };

  const onSubmit = async ({ email, password }: Inputs) => {
    try {
      if (authType) await signInApi(email, password);
      else await signUpApi(email, password);
      history.push('/');
    } catch (e) {
      setError({ message: e.code });
    }
  };

  const onChange = () => setError({ message: '' });

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
            <Message className="message email__already" width="auto">
              이미 존재하는 이메일
            </Message>
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
            <Message className="message email__already" width="auto">
              이미 존재하는 이메일
            </Message>
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
                onChange={onChange}
              />
              {errors?.email?.type === 'required' && (
                <Message className="message email__required" width="auto">
                  이메일은 필수입력
                </Message>
              )}
              {errors?.email?.type === 'email' && (
                <Message className="message email__format--not" width="auto">
                  올바르지 않은 이메일 형식
                </Message>
              )}
              {error?.message === 'auth/email-already-in-use' && (
                <Message className="message email__already" width="auto">
                  이미 존재하는 이메일
                </Message>
              )}
              {error?.message === 'auth/user-not-found' && (
                <Message className="message email__already--not" width="auto">
                  존재하지 않는 이메일
                </Message>
              )}
            </InputGroup>
            <InputGroup>
              <Input
                type="password"
                name="password"
                autoComplete="new-password"
                placeholder="비밀번호를 입력하세요."
                ref={register}
                onChange={onChange}
              />
              {errors?.password?.type === 'min' && (
                <Message className="message password__ieast--6" width="auto">
                  비밀번호는 최소 6자 이상
                </Message>
              )}
              {error?.message === 'auth/wrong-password' && (
                <Message className="message password--wrong" width="auto">
                  잘못된 비밀번호
                </Message>
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

  .message {
    top: 50%;
    right: 10px;
    transform: translateY(-50%);

    @media (min-width: 768px) {
      right: auto;

      &.password {
        &__ieast {
          &--6 {
            left: -150px;
          }
        }
        &--wrong {
          left: -112px;
        }
      }

      &.email {
        &__required {
          left: -121px;
        }

        &__format {
          &--not {
            left: -154px;
          }
        }

        &__already {
          left: -132px;
          &--not {
            left: -132px;
          }
        }
      }
    }

    &::after {
      display: block;
      position: absolute;
      top: 50%;
      right: -10px;
      transform: translateY(-50%);
      content: '';
      border-top: 5px solid transparent;
      border-right: 5px solid transparent;
      border-left: 5px solid #1d1d1d;
      border-bottom: 5px solid transparent;
      width: 0;
      height: 0;
    }
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
