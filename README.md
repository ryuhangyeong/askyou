# AskYou

## 한 눈에 보기

![AskYou 기술스택](https://user-images.githubusercontent.com/27342882/107143735-138f0a00-697a-11eb-93e3-e0a61c72f728.PNG)

## 프로젝트 앞으로 해야할 일들 정리

[여기에서 확인](https://github.com/ryuhangyeong/Askyou/projects/1)

## 기술 스택
- Reactjs
- React Router
- React-hook-form
- axios
- Yup
- Typescript
- Styled-Components
- Firebase
- Firebase auth
- Firebase database
- Firebase functions

## 주요 기능
- 회원가입/로그인(이메일, 비밀번호)
- OAuth
  - 카카오 로그인
  - 구글 로그인
  - 페이스북 로그인
- 선택한 단어로 알아보는 나의 MBTI
- MBTI 결과 페이지
- MBTI 통계 페이지

## Tip
- `firebase function`에서 typescript를 사용하는 경우 build 과정을 거쳐야하기 때문에 firebase 에뮬레이터가  build 결과를 감지를 못한다. 그래서 아래 명령어로 타입스크립트 코드 변화를 감지하도록 도와주자.
```
npx tsc --watch
```

## 이슈

- 카카오톡(브라우저)으로 askyou 접속 후 [구글로 로그인]하는 경우, **disallowed_useragent** 오류가 뜬다. 
  - [관련 자료1](https://developers-kr.googleblog.com/2016/08/modernizing-oauth-interactions-in-native-apps.html)

- `Introduce` 컴포넌트에서 `setInterval`과 `setTimeout`으로 구현된 것을 `requestAnimationFrame`으로 개선하였다. 애니메이션이나 렌더링 성능 향상때 주로 `requestAnimationFrame`를 사용한다고 하여 사용해서 동일 기능을 구현해보았는데. 실제로 성능이 개선되었는지 확인하는 방법을 잘 모른다. **이전 코드와 개선 코드**를 크롬 개발자 도구의 Performace를 통해서 비교를 해보았는데. Summary나 Memory 부분을 보아도 뭐가 달라진건지 잘 모르겠다. 잘못쓴거겠지??

- 애니메이션 효과 후 컴포넌트 삭제하기

`Share` 컴포넌트는 메뉴를 펼치고 감출 때 화면상에서는 사라지지만 실제로 DOM에는 남아있고 감출 뿐이다. 이렇다보니 키보드 접근성이 떨어진다. 화면에는 분명히 없는데 탭으로는 접근이 가능하기 때문이다. 그래서 [공유하기 버튼]을 누른 경우 애니메이션 효과로 펼쳐지면서 다양한 미디어의 공유하기 버튼이 나오게 만들어야하는 필요성이 생겼다.

근데 이 문제는 생각보다 복잡하더라. 결론적으로는 `useAnimation`이라는 hook을 통해서 두 개의 변수로 내가 가진 문제를 해결할 수 있었다. 솔찍히 이렇게 하는게 맞는 접근법인지는 잘 모르겠다. 그나마 위안을 삼은 것은 내가 만든 재사용 훅이 컴포넌트 전반적인 애니메이션 효과에 다 사용될만큼 범용적이라는 것이다. 아마 애니메이션을 위한 컴포넌트? 라이브러리를 제공하는 것으로 알고 있지만 한번 직접 만들어보고 싶어서 작성해보았다.

결과적으로 1) 직관적인 키보드 접근성 2) 애니메이션 효과 두 가지 토끼를 모두 잡을 수 있었다.

## 개선할 수 있는 것들 정리

- 현재 `index.html`에 있는 `kakaologin` 라이브러리를 `/auth/`에 접속했을 때나 혹은 [카카오톡 로그인하기] 마우스 오버시 가져오게 할 순 없을까?
  - lazy loading 대신 일단은 `AuthForm` 컴포넌트에서 로드하도록 했다. 기본적으로 라우팅 기준으로 코드 스플리팅이 되어있어서 카카오 로그인하기 모듈은 로그인하는 페이지에서만 다운로드한다.

- `Message` 컴포넌트 화살표 상하좌우를 props로 설정하거나 위치를 설정할 수 있는 옵션 고민해보기(재사용성을 위하여) / 지금은 컴포넌트를 가져와서 직접 css로 하나씩 표현. 이렇게 했던 이유는 화살표 위치가 모두 제 각각이라