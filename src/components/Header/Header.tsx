import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { CgMenuGridO } from 'react-icons/cg';
import { VscChecklist } from 'react-icons/vsc';
import { SiGoogleanalytics } from 'react-icons/si';
import { RiSurveyFill } from 'react-icons/ri';
import Responsive from '../Responsive';
import Message from '../Message';
import useAuth from '../../hooks/useAuth';
import { logout } from '../../api/auth';
import palette from '../../utils/palette';

export default () => {
  const { user } = useAuth();
  return (
    <>
      <Layout>
        <Wrapper>
          <Logo>
            <Link to="/">Askyou</Link>
          </Logo>
          <Right>
            <label className="menu" htmlFor="menu">
              <CgMenuGridO />
              <Message className="message">메뉴</Message>
              <input type="checkbox" id="menu" />
              <ul className="layer">
                <li>
                  <Link to="/mbti">
                    <VscChecklist />
                    <span>MBTI 검사</span>
                  </Link>
                </li>
                <li>
                  <Link to="/mbti/analysis">
                    <SiGoogleanalytics />
                    <span>결과 통계</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <RiSurveyFill />
                    <span>설문조사</span>
                  </Link>
                </li>
              </ul>
            </label>
            {user ? (
              <span className="item" onClick={() => logout()}>
                로그아웃
              </span>
            ) : (
              <Link to="/auth" className="item">
                로그인
              </Link>
            )}
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
    font-family: 'IstokWeb', sans-serif;
    font-weight: 700;
    font-size: 2rem;

    @media (min-width: 768px) {
      font-weight: 400;
    }
  }
`;

const Right = styled.div`
  display: flex;
  margin-left: auto;

  .menu {
    position: relative;
    font-size: 1.5rem;
    display: flex;
    align-items: center;

    > svg {
      font-size: 2.5rem;
      padding: 0.5rem;
      cursor: pointer;

      &:hover {
        background-color: ${palette.gray[1]};
        border-radius: 50%;
      }

      &:hover + .message {
        display: flex;
      }
    }

    input[type='checkbox'] {
      display: none;

      &:checked {
        & + ul.layer {
          display: flex;
        }
      }
    }

    .message {
      display: none;
      position: absolute;
      top: 45px;
      left: -24px;

      @media (min-width: 1280px) {
        top: 60px;
      }
    }

    .layer {
      display: none;
      position: fixed;
      top: 45px;
      right: 0;
      left: auto;
      flex-wrap: wrap;
      border-radius: 5px;
      padding: 1.5rem 0;
      width: 350px;
      background-color: #fff;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
      transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

      @media (min-width: 1280px) {
        position: absolute;
        top: 60px;
        left: calc(-350px / 2);
      }

      li {
        flex-basis: 33.33333333%;
        a {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 1rem;

          svg {
            font-size: 3rem;
          }

          &:hover {
            background-color: ${palette.gray[1]};
          }
        }
      }
    }
  }

  .item {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 1rem;
    width: 6rem;
    height: 7rem;
    color: #333;
    font-size: 1.6rem;
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, 0.05);
    }
  }
`;

const Spacer = styled.div`
  height: 7rem;
`;
