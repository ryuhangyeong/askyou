import { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { surveyCompleted, surveySelect } from '../modules/survey';
import { getAnalysisMbti } from '../data/survey';

export default function useSurvey() {
  const { loading, list, select } = useSelector(
    (state: RootState) => state.survey
  );

  const dispatch = useDispatch();

  const onSurveyCompleted = useCallback(
    (data) => dispatch(surveyCompleted(data)),
    [dispatch]
  );

  const onSurveySelect = useCallback((data) => dispatch(surveySelect(data)), [
    dispatch,
  ]);

  useEffect(() => {
    if (list.length === select.length) {
      onSurveyCompleted(true);
      alert(getAnalysisMbti(select));
    }
  }, [list.length, select.length, select, onSurveyCompleted]);

  return {
    loading,
    list,
    select,
    onSurveyCompleted,
    onSurveySelect,
  };
}
