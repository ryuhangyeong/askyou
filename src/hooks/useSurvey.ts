import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import {
  surveySelect,
  surveySelectClear,
  surveySetMbti,
} from '../modules/survey';

export default function useSurvey() {
  const { list, select, mbti } = useSelector(
    (state: RootState) => state.survey
  );

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

  return {
    list,
    select,
    mbti,
    onSurveySelect,
    onSurveySelectClear,
    onSurveySetMbti,
  };
}
