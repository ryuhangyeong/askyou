const AUTH_LOADING = 'auth/AUTH_LOADING' as const;
const AUTH_DATA = 'auth/AUTH_DATA' as const;

export const authLoading = (loading: boolean) => ({
  type: AUTH_LOADING,
  payload: loading,
});

type userType = {
  uid: string;
  displayName?: string | null;
  email?: string | null;
};

export const authData = (user: userType | null) => ({
  type: AUTH_DATA,
  payload: user,
});

type AuthAction = ReturnType<typeof authLoading> | ReturnType<typeof authData>;

type AuthState = {
  loading: boolean;
  user: userType | null;
};

const initialState: AuthState = {
  loading: true,
  user: null,
};

function auth(state: AuthState = initialState, action: AuthAction): AuthState {
  switch (action.type) {
    case AUTH_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case AUTH_DATA:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
}

export default auth;
