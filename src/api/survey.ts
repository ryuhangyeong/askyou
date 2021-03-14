import firebase from 'firebase/app';
import { ISurveyItem } from '../data/survey';

export interface ISurveyResult {
  created: number;
  mbti: string;
  select: ISurveyItem[];
  uid: string;
}

const database = firebase.database().ref('survey/');

export const createSurvey = async (payload: {
  uid: string | undefined;
  select: ISurveyItem[];
  mbti: string;
}) => {
  const { uid = '', select = [], mbti } = payload;
  const data = await database.push({
    created: firebase.database.ServerValue.TIMESTAMP,
    uid,
    select,
    mbti,
  });
  return data;
};

export const getSurveyResult = async (): Promise<ISurveyResult[]> => {
  const data = await database.once('value');
  return Object.values(data.val());
};
