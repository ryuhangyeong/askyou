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

const createUser = async (userId: string, displayName: string) => {
  const updateParams = {
    provider: 'KAKAO',
    displayName,
    uid: userId,
  };

  try {
    await admin.auth().getUser(userId);
  } catch (error) {
    if (error.code === 'auth/user-not-found') {
      await admin.auth().createUser(updateParams);
    }
  }
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

export const OauthKakao = functions.https.onRequest(async (req, res) => {
  if (req.method === 'POST') {
    const { accessToken } = req.body;

    try {
      const body = await getUserProfile(accessToken);
      const { id } = body.data;
      const userId = `kakao:${id}`;
      const displayName = body.data?.properties?.nickname;

      await createUser(userId, displayName);

      return crossOrigin(req, res, () => {
        res.json({ hello: 'world' });
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
