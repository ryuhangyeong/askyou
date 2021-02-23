import { deprecated, ActionType, createReducer } from 'typesafe-actions';
import { getSurvey, ISurvey } from '../mbti/getSurvey';

const { createStandardAction } = deprecated;

const SURVEY_LOADING = 'survey/SURVEY_LOADING';
const SURVEY_SELECT = 'survey/SURVEY_SELECT';

export const surveyLoading = createStandardAction(SURVEY_LOADING)<boolean>();
export const surveySelect = createStandardAction(SURVEY_SELECT)<ISurvey>();

const actions = { surveyLoading, surveySelect };

type SurveyAction = ActionType<typeof actions>;

type SurveyState = {
  loading: boolean;
  list: ISurvey[];
  select: ISurvey[];
  mbti: string;
};

const initialState: SurveyState = {
  loading: false,
  list: getSurvey,
  select: [],
  mbti: '',
};

const survey = createReducer<SurveyState, SurveyAction>(initialState, {
  [SURVEY_LOADING]: (state, action) => ({
    ...state,
    loading: action.payload,
  }),
  [SURVEY_SELECT]: (state, action) => {
    const select = [...state.select, action.payload];
    // @TODO
    return {
      ...state,
      select,
    };
  },
});

export default survey;
