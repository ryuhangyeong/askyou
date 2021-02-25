import firebase from 'firebase/app';
import axios from 'axios';

export default async (accessToken: string) => {
  if (process.env.NODE_ENV === 'production') {
    const res = await firebase.functions().httpsCallable('kakaoLogin')({
      accessToken,
    });
    return res;
  }

  const url = 'http://localhost:5001/askyou-41efc/us-central1/kakaoLogin';
  const res = await axios.post(url, {
    data: { accessToken },
  });
  return res.data;
};
