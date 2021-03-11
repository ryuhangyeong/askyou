import firebase from 'firebase/app';
import { getAnalysisMbti, ISurveyItem } from '../data/survey';

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
}) => {
  const { uid = '', select = [] } = payload;
  const data = await database.push({
    created: firebase.database.ServerValue.TIMESTAMP,
    mbti: getAnalysisMbti(select),
    uid,
    select,
  });
  return data;
};

export const getSurveyResult = async (): Promise<ISurveyResult[]> => {
  const data = await database.once('value');
  return Object.values(data.val());
};
