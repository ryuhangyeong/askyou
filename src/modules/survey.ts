import { deprecated, ActionType, createReducer } from 'typesafe-actions';
import { getSurvey, ISurvey, ISurveyItem } from '../data/survey';

const { createStandardAction } = deprecated;

const SURVEY_SELECT = 'survey/SURVEY_SELECT';
const SURVEY_SELECT_CLEAR = 'survey/SURVEY_SELECT_CLEAR';

const SURVEY_SET_MBTI = 'survey/SURVEY_SET_MBTI';

export const surveySelect = createStandardAction(SURVEY_SELECT)<ISurveyItem>();
export const surveySelectClear = createStandardAction(SURVEY_SELECT_CLEAR)();
export const surveySetMbti = createStandardAction(SURVEY_SET_MBTI)<string>();

const actions = { surveySelect, surveySelectClear, surveySetMbti };

type SurveyAction = ActionType<typeof actions>;

type SurveyState = {
  list: ISurvey[];
  select: ISurveyItem[];
  mbti: string;
};

const initialState: SurveyState = {
  list: getSurvey,
  select: [],
  mbti: '',
};

const survey = createReducer<SurveyState, SurveyAction>(initialState, {
  [SURVEY_SELECT]: (state, action) => ({
    ...state,
    select: [...state.select, action.payload],
  }),
  [SURVEY_SELECT_CLEAR]: (state) => ({
    ...state,
    select: [],
  }),
  [SURVEY_SET_MBTI]: (state, action) => ({
    ...state,
    mbti: action.payload,
  }),
});

export default survey;
