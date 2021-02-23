import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { surveyLoading, surveySelect } from '../modules/survey';

export default function useSurvey() {
  const { loading, list, select } = useSelector(
    (state: RootState) => state.survey
  );
  const dispatch = useDispatch();

  const onSurveyLoading = useCallback((data) => dispatch(surveyLoading(data)), [
    dispatch,
  ]);

  const onSurveySelect = useCallback((data) => dispatch(surveySelect(data)), [
    dispatch,
  ]);

  return {
    loading,
    list,
    select,
    onSurveyLoading,
    onSurveySelect,
  };
}
