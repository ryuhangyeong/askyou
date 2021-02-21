import { deprecated, ActionType, createReducer } from 'typesafe-actions';

const { createStandardAction } = deprecated;

const TOAST_OPEN = 'toast/TOAST_OPEN';
const TOAST_CLOSE = 'toast/TOAST_CLOSE';

export const toastOpen = createStandardAction(TOAST_OPEN)<string>();
export const toastClose = createStandardAction(TOAST_CLOSE)();

const TOAST_ANIMATE_OPEN = 'toast/TOAST_ANIMATE_OPEN';
const TOAST_ANIMATE_CLOSE = 'toast/TOAST_ANIMATE_CLOSE';

export const toastAnimateOpen = createStandardAction(TOAST_ANIMATE_OPEN)();
export const toastAnimateClose = createStandardAction(TOAST_ANIMATE_CLOSE)();

const actions = { toastOpen, toastClose, toastAnimateOpen, toastAnimateClose };
type ToastAction = ActionType<typeof actions>;

type ToastState = {
  visible: boolean;
  message: string;
  animate: boolean;
};

const initialState: ToastState = {
  visible: false,
  message: '',
  animate: false,
};

const toast = createReducer<ToastState, ToastAction>(initialState, {
  [TOAST_OPEN]: (state, action) => ({
    ...state,
    visible: true,
    message: action.payload,
  }),
  [TOAST_CLOSE]: (state) => ({
    ...state,
    visible: false,
    message: '',
  }),
  [TOAST_ANIMATE_OPEN]: (state) => ({
    ...state,
    animate: true,
  }),
  [TOAST_ANIMATE_CLOSE]: (state) => ({
    ...state,
    animate: false,
  }),
});

export default toast;
