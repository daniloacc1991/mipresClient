import { AuthActionsType, All as AllAuthActions } from '../actions/auth.actions';

export interface AuthState {
  username: string;
  email: string;
  scope: string;
  usuario: string;
  token: string;
  isLoading: false;
  isLogin: false;
  error: string;
}

const INIT_STATE: AuthState = {
  username: 'GUEST',
  email: '',
  scope: '',
  usuario: '',
  token: null,
  isLoading: false,
  isLogin: false,
  error: null,
};

export function reducers(state: AuthState = INIT_STATE, { type, payload }: AllAuthActions) {
  switch (type) {

    case AuthActionsType.LOGIN_USER: {
      return {
        ...state,
        isLoading: true,
      }
    }

    case AuthActionsType.LOGIN_USER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isLogin: true,
        error: null,
        username: payload.nombre,
        token: payload.token,
        email: payload.email,
        scope: payload.scope,
        usuario: payload.usuario,
      }
    }

    case AuthActionsType.LOGOUT_USER_SUCCESS: {
      return {
        ...state,
        username: 'GUEST',
        email: '',
        scope: '',
        usuario: '',
        token: null,
        isLoading: false,
        isLogin: false,
        error: null,
      }
    }

    case AuthActionsType.LOGIN_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: payload.error,
      }
    }

    case AuthActionsType.CHANGE_PASSWORD_SUCCESS: {
      return {
        ...state,
      }
    }

    default:
      return state;
  }
}

export const getAuthState = (state: AuthState) => state;
export const getAuthError = (state: AuthState) => state.error;
export const getAuthLoading = (state: AuthState) => state.isLoading;
export const getAuthLoging = (state: AuthState) => state.isLogin;
export const getAuthtoken = (state: AuthState) => state.token;
export const getAuthUsername = (state: AuthState) => state.username;
