import { deprecated, ActionType, createReducer } from 'typesafe-actions';

const { createStandardAction } = deprecated;

const LOADING_START = 'loading/LOADING_START';
const LOADING_FINISH = 'loading/LOADING_FINISH';

export const loadingStart = createStandardAction(LOADING_START)<string>();
export const loadingFinish = createStandardAction(LOADING_FINISH)<string>();

const actions = { loadingStart, loadingFinish };

type LoadingAction = ActionType<typeof actions>;

type LoadingState = {
  [k: string]: boolean;
};

const initialState: LoadingState = {};

const loading = createReducer<LoadingState, LoadingAction>(initialState, {
  [LOADING_START]: (state, action) => ({
    ...state,
    [action.payload]: true,
  }),
  [LOADING_FINISH]: (state, action) => ({
    ...state,
    [action.payload]: false,
  }),
});

export default loading;
