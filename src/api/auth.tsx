import firebase from 'firebase';

export const signUpApi = async (email: string, password: string) => {
  const data = await firebase
    .auth()
    .createUserWithEmailAndPassword(email, password);
  return data;
};

export const signInApi = async (email: string, password: string) => {
  const data = await firebase
    .auth()
    .signInWithEmailAndPassword(email, password);
  return data;
};

/*
 * @todo 타입스크립트 타입 오류 해결 후 간소화
 */
export const oauthApi = async (type: string) => {
  let data;

  if (type === 'Google') {
    data = await firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider());
  } else if (type === 'Facebook') {
    data = await firebase
      .auth()
      .signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }

  return data;
};
