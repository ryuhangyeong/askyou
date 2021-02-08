import * as functions from 'firebase-functions';
import * as cors from 'cors';
import axios from 'axios';

/*
 * @todo origin askyou만 접근하도록 변경 예정
 */
const crossOrigin = cors({
  origin: true,
});

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
      const data = await getUserProfile(accessToken);

      return crossOrigin(req, res, () => {
        res.json({ hello: 'world' });
      });
    } catch (e) {
      console.log(e);
    }
  }

  return crossOrigin(req, res, () => {
    res.json({});
  });
});
