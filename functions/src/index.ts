import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as cors from 'cors';
import axios from 'axios';
import * as dotenv from 'dotenv';
import { ServiceAccount } from 'firebase-admin';

dotenv.config();

const serviceAccount: ServiceAccount = {
  projectId: process.env.FIREBASE_ADMIN_PROJECT_ID,
  clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
  privateKey: (process.env.FIREBASE_ADMIN_PRIVATE_KEY || '')
    .split('\\n')
    .join('\n'),
};

const crossOrigin = cors({
  origin: true,
});

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.FIREBASE_DATABASE_URL,
});

const createCustomToken = async (uid: string | undefined) => {
  if (uid) {
    const data = await admin.auth().createCustomToken(uid, {
      provider: 'KAKAO',
    });
    return data;
  }
  return null;
};

const createUser = async (uid: string, displayName: string) => {
  let data;

  const updateParams = {
    provider: 'KAKAO',
    displayName,
    uid,
  };

  try {
    data = await admin.auth().getUser(uid);
  } catch (error) {
    if (error.code === 'auth/user-not-found') {
      data = await admin.auth().createUser(updateParams);
    }
  }
  return data;
};

const getUserProfile = async (accessToken: string) => {
  const url: string = 'https://kapi.kakao.com/v2/user/me?secure_resource=true';

  const data = await axios({
    url,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return data;
};

export const KakaoLogin = functions.https.onRequest(async (req, res) => {
  if (req.method === 'POST') {
    const { accessToken } = req.body;

    try {
      const body = await getUserProfile(accessToken);
      const { id } = body.data;
      const uid = `kakao:${id}`;
      const displayName = body.data?.properties?.nickname;

      const user = await createUser(uid, displayName);
      const firebaseToken = await createCustomToken(user?.uid);

      return crossOrigin(req, res, () => {
        res.json({ accessToken, firebaseToken });
      });
    } catch (error) {
      return crossOrigin(req, res, () => {
        res.status(400).json({ error: 'error' });
      });
    }
  }

  return crossOrigin(req, res, () => {
    res.json({});
  });
});
