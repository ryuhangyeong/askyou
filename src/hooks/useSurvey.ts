import { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { RootState } from '../modules';
import { getAnalysisMbti } from '../data/survey';
import {
  surveySelect,
  surveySelectClear,
  surveySetMbti,
} from '../modules/survey';
import { createSurvey } from '../api/survey';
import createRequest from '../utils/createRequest';

export default function useSurvey() {
  const history = useHistory();
  const { list, select, mbti } = useSelector(
    (state: RootState) => state.survey
  );
  const loading = useSelector((state: RootState) => state.loading);
  const { user } = useSelector((state: RootState) => state.auth);

  const dispatch = useDispatch();

  const onSurveySelect = useCallback((data) => dispatch(surveySelect(data)), [
    dispatch,
  ]);

  const onSurveySelectClear = useCallback(() => dispatch(surveySelectClear()), [
    dispatch,
  ]);

  const onSurveySetMbti = useCallback((data) => dispatch(surveySetMbti(data)), [
    dispatch,
  ]);

  useEffect(() => {
    if (list.length === select.length) {
      (async () => {
        onSurveySetMbti(getAnalysisMbti(select));

        const request = createRequest('survey/SURVEY_CREATE', createSurvey);
        await request({ uid: user?.uid, select, mbti });

        history.push('/mbti/result');
      })();
    }
  }, [
    list.length,
    select.length,
    select,
    mbti,
    user?.uid,
    history,
    onSurveySetMbti,
  ]);

  return {
    list,
    loading,
    select,
    mbti,
    onSurveySelect,
    onSurveySelectClear,
    onSurveySetMbti,
  };
}
