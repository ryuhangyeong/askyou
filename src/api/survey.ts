import firebase from 'firebase/app';
import { getAnalysisMbti, ISurveyItem } from '../data/survey';

const datbase = firebase.database().ref('survey/');

export const createSurvey = async (params: {
  uid: string | undefined;
  select: ISurveyItem[];
}) => {
  const { uid = '', select = [] } = params;
  const data = await datbase.push({
    created: firebase.database.ServerValue.TIMESTAMP,
    mbti: getAnalysisMbti(select),
    uid,
    select,
  });
  return data;
};
