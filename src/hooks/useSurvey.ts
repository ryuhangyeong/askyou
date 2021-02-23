import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { surveyAdd } from '../modules/survey';

export default function useSurvey() {
  const { list } = useSelector((state: RootState) => state.survey);
  const dispatch = useDispatch();

  const onSurveyAdd = useCallback((data) => dispatch(surveyAdd(data)), [
    dispatch,
  ]);

  return {
    list,
    onSurveyAdd,
  };
}
