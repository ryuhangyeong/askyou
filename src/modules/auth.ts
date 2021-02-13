import { deprecated, ActionType, createReducer } from 'typesafe-actions';

const { createStandardAction } = deprecated;

const AUTH_LOADING = 'auth/AUTH_LOADING';
const AUTH_FETCH = 'auth/AUTH_FETCH';

export const authLoading = createStandardAction(AUTH_LOADING)<boolean>();

export type userType = {
  uid: string;
  displayName?: string | null;
  email?: string | null;
} | null;

export const authFetch = createStandardAction(AUTH_FETCH)<userType>();

const actions = { authLoading, authFetch };
type AuthAction = ActionType<typeof actions>;

type AuthState = {
  loading: boolean;
  user: userType | null;
};

const initialState: AuthState = {
  loading: false,
  user: null,
};

const auth = createReducer<AuthState, AuthAction>(initialState, {
  [AUTH_LOADING]: (state, action) => ({
    ...state,
    loading: action.payload,
  }),
  [AUTH_FETCH]: (state, action) => ({
    ...state,
    user: action.payload,
  }),
});

export default auth;
