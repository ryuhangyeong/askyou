import { deprecated, ActionType, createReducer } from 'typesafe-actions';
import { getSurvey, ISurvey, ISurveyItem } from '../data/survey';

const { createStandardAction } = deprecated;

const SURVEY_COMPLETED = 'survey/SURVEY_COMPLETED';
const SURVEY_SELECT = 'survey/SURVEY_SELECT';

export const surveyCompleted = createStandardAction(
  SURVEY_COMPLETED
)<boolean>();
export const surveySelect = createStandardAction(SURVEY_SELECT)<ISurveyItem>();

const actions = { surveyCompleted, surveySelect };

type SurveyAction = ActionType<typeof actions>;

type SurveyState = {
  loading: boolean;
  list: ISurvey[];
  select: ISurveyItem[];
  mbti: string;
};

const initialState: SurveyState = {
  loading: false,
  list: getSurvey,
  select: [],
  mbti: '',
};

const survey = createReducer<SurveyState, SurveyAction>(initialState, {
  [SURVEY_COMPLETED]: (state, action) => ({
    ...state,
    loading: action.payload,
  }),
  [SURVEY_SELECT]: (state, action) => ({
    ...state,
    select: [...state.select, action.payload],
  }),
});

export default survey;
