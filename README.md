# AskYou

## 한 눈에 보기

![AskYou 기술스택](https://user-images.githubusercontent.com/27342882/107143735-138f0a00-697a-11eb-93e3-e0a61c72f728.PNG)

## 기술 스택
- Reactjs
- React Router
- React-hook-form
- react-query
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

## Tip
- `firebase function`에서 typescript를 사용하는 경우 build 과정을 거쳐야하기 때문에 firebase 에뮬레이터가  build 결과를 감지를 못한다. 그래서 아래 명령어로 타입스크립트 코드 변화를 감지하도록 도와주자.
```
npx tsc --watch
```

## 이슈
- 카카오톡(브라우저)으로 askyou 접속 후 [구글로 로그인]하는 경우, **disallowed_useragent** 오류가 뜬다. 
  - [관련 자료1](https://developers-kr.googleblog.com/2016/08/modernizing-oauth-interactions-in-native-apps.html)

- `Introduce` 컴포넌트에서 `setInterval`과 `setTimeout`으로 구현된 것을 `requestAnimationFrame`으로 개선하였다. 애니메이션이나 렌더링 성능 향상때 주로 `requestAnimationFrame`를 사용한다고 하여 사용해서 동일 기능을 구현해보았는데. 실제로 성능이 개선되었는지 확인하는 방법을 잘 모른다. **이전 코드와 개선 코드**를 크롬 개발자 도구의 Performace를 통해서 비교를 해보았는데. Summary나 Memory 부분을 보아도 뭐가 달라진건지 잘 모르겠다. 잘못쓴거겠지??

## 개선할 수 있는 것들 정리
- 현재 `index.html`에 있는 `kakaologin` 라이브러리를 `/auth/`에 접속했을 때나 혹은 [카카오톡 로그인하기] 마우스 오버시 가져오게 할 순 없을까?