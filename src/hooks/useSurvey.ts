import { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { surveySelect } from '../modules/survey';
import { createSurvey } from '../api/survey';
import createRequest from '../utils/createRequest';

export default function useSurvey() {
  const { list, select } = useSelector((state: RootState) => state.survey);
  const loading = useSelector((state: RootState) => state.loading);
  const { user } = useSelector((state: RootState) => state.auth);

  const dispatch = useDispatch();

  const onSurveySelect = useCallback((data) => dispatch(surveySelect(data)), [
    dispatch,
  ]);

  useEffect(() => {
    if (list.length === select.length) {
      const request = createRequest('survey/SURVEY_CREATE', createSurvey);
      request({ uid: user?.uid, select });
    }
  }, [list.length, select.length, select, user?.uid]);

  return {
    list,
    loading,
    select,
    onSurveySelect,
  };
}
