import * as functions from 'firebase-functions';
import * as cors from 'cors';

const crossOrigin = cors({
  origin: true,
});

export const helloWorld = functions.https.onRequest(async (_, res) => {
  res.send('Hello from Firebase!');
});

export const OauthKakao = functions.https.onRequest(async (_, res) => {
  return crossOrigin(_, res, () => {
    res.json({ hello: 'world' });
  });
});
