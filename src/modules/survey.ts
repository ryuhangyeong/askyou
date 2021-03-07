import { deprecated, ActionType, createReducer } from 'typesafe-actions';
import { getSurvey, ISurvey, ISurveyItem } from '../data/survey';

const { createStandardAction } = deprecated;

const SURVEY_SELECT = 'survey/SURVEY_SELECT';

export const surveySelect = createStandardAction(SURVEY_SELECT)<ISurveyItem>();

const actions = { surveySelect };

type SurveyAction = ActionType<typeof actions>;

type SurveyState = {
  list: ISurvey[];
  select: ISurveyItem[];
};

const initialState: SurveyState = {
  list: getSurvey,
  select: [],
};

const survey = createReducer<SurveyState, SurveyAction>(initialState, {
  [SURVEY_SELECT]: (state, action) => ({
    ...state,
    select: [...state.select, action.payload],
  }),
});

export default survey;
