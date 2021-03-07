import firebase from 'firebase/app';
import { getAnalysisMbti, ISurveyItem } from '../data/survey';

const datbase = firebase.database().ref('survey/');

export const createSurvey = async (payload: {
  uid: string | undefined;
  select: ISurveyItem[];
}) => {
  const { uid = '', select = [] } = payload;
  const data = await datbase.push({
    created: firebase.database.ServerValue.TIMESTAMP,
    mbti: getAnalysisMbti(select),
    uid,
    select,
  });
  return data;
};
