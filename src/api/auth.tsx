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

export const logout = async () => {
  const data = await firebase.auth().signOut();
  return data;
};

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
