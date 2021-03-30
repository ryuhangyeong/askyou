import firebase from 'firebase/app';
import kakaoLogin from '../functions/kakaoLogin';

export const signUpApi = async (payload: {
  email: string;
  password: string;
}) => {
  const { email, password } = payload;
  const data = await firebase
    .auth()
    .createUserWithEmailAndPassword(email, password);
  return data;
};

export const signInApi = async (payload: {
  email: string;
  password: string;
}) => {
  const { email, password } = payload;

  const data = await firebase
    .auth()
    .signInWithEmailAndPassword(email, password);
  return data;
};

export const logout = async () => {
  const data = await firebase.auth().signOut();
  return data;
};

export const oauthApi = async (payload: { type: string }) => {
  const { type } = payload;

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

export const oauthKakao = async (payload: { accessToken: string }) => {
  const { accessToken } = payload;
  const token = await kakaoLogin(accessToken);
  await firebase.auth().signInWithCustomToken(token?.data?.firebaseToken);
};

export const getCurrentUser = (
  callback: (user: firebase.User | null) => void
) =>
  firebase
    .auth()
    .onAuthStateChanged((user: firebase.User | null) => callback(user));
