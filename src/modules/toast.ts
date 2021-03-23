import { deprecated, ActionType, createReducer } from 'typesafe-actions';

const { createStandardAction } = deprecated;

const TOAST_OPEN = 'toast/TOAST_OPEN';

export const toastOpen = createStandardAction(TOAST_OPEN)<string>();

const actions = { toastOpen };
type ToastAction = ActionType<typeof actions>;

type ToastState = {
  message: string;
};

const initialState: ToastState = {
  message: '',
};

const toast = createReducer<ToastState, ToastAction>(initialState, {
  [TOAST_OPEN]: (state, action) => ({
    ...state,
    visible: true,
    message: action.payload,
  }),
});

export default toast;
