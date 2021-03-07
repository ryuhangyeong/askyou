import { deprecated, ActionType, createReducer } from 'typesafe-actions';

const { createStandardAction } = deprecated;

const AUTH_FETCH = 'auth/AUTH_FETCH';

export type userType = {
  uid: string;
  displayName?: string | null;
  email?: string | null;
} | null;

export const authFetch = createStandardAction(AUTH_FETCH)<userType>();

const actions = { authFetch };
type AuthAction = ActionType<typeof actions>;

type AuthState = {
  user: userType | null;
};

const initialState: AuthState = {
  user: null,
};

const auth = createReducer<AuthState, AuthAction>(initialState, {
  [AUTH_FETCH]: (state, action) => ({
    ...state,
    user: action.payload,
  }),
});

export default auth;
