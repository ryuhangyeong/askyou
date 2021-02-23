import { deprecated, ActionType, createReducer } from 'typesafe-actions';
import { ISurvey } from '../mbti/getSurvey';

const { createStandardAction } = deprecated;

const SURVEY_ADD = 'survey/SURVEY_ADD';

export const surveyAdd = createStandardAction(SURVEY_ADD)<string>();

const actions = { surveyAdd };

type SurveyAction = ActionType<typeof actions>;

type SurveyState = {
  list: ISurvey[];
};

const initialState: SurveyState = {
  list: [],
};

const survey = createReducer<SurveyState, SurveyAction>(initialState, {
  [SURVEY_ADD]: (state, action) => ({
    ...state,
    // data: state.data.concat(action.payload),
  }),
});

export default survey;
