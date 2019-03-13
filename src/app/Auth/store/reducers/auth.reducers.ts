import { AuthActionsType, All as AllAuthActions } from '../Actions/auth.actions';

export interface AuthState {
  username: string,
  token: string,
  isLoading: false,
  isLogin: false,
  error: string,
}

const INIT_STATE: AuthState = {
  username: 'GUEST',
  token: null,
  isLoading: false,
  isLogin: false,
  error: null,
};

export function reducers(state: AuthState = INIT_STATE, { type, payload }: AllAuthActions) {
  switch (type) {

    case AuthActionsType.LOGIN_USER:
      return {
        ...state,
        isLoading: true,
        isLogin: false,
      }

    case AuthActionsType.LOGIN_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLogin: true,
        username: payload.username,
        token: payload.token
      }

    case AuthActionsType.LOGOUT_USER_SUCCESS:
      return {
        ...state,
        username: 'GUEST',
        token: null,
        isLoading: false,
        isLogin: false,
        error: null,
      }

    default:
      return state;
  }
}

export const getAuthState = (state: AuthState) => state;
export const getAuthAction = (accion: any) => accion.payload;
export const getAuthError = (state: AuthState) => state.error;
export const getAuthLoading = (state: AuthState) => state.isLoading;
export const getAuthLoging = (state: AuthState) => state.isLogin;
export const getAuthtoken = (state: AuthState) => state.token;
