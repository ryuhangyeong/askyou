import firebase from 'firebase';
import axios from 'axios';

export default async (accessToken: string) => {
  let data;

  if (process.env.NODE_ENV !== 'production') {
    const url = 'http://localhost:5001/askyou-1b1fa/us-central1/KakaoLogin';

    data = await axios.post(url, {
      accessToken,
    });
  } else {
    data = await firebase.functions().httpsCallable('KakaoLogin')({
      accessToken,
    });
  }

  return data;
};
