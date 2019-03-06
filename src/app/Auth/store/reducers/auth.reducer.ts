import { AuthActionType, All as AllAuthActions } from '../Actions/auth.actions';

export interface AuthState {
  user: Array<any>;
  error: string;
  isLoading: boolean;
  isLogin: boolean;
}

const INIT_STATE: AuthState = {
  user: [],
  error: '',
  isLoading: false,
  isLogin: false,
};

export function AuthReducer(state: AuthState = INIT_STATE, action: AllAuthActions) {
  switch (action.type) {
    case AuthActionType.LOGIN_USER:
      console.log('reducer entre en login');
      return {
        ...state,
        isLoading: true,
        isLogin: false,
        action,
      };
    case AuthActionType.LOGGED_USER:
      console.log('entre al logged');
      return {
        ...state,
        isLoading: false,
        isLogin: true,
        user: action.payload.user,
      };
    case AuthActionType.LOGIN_USER_ERROR:
      return {
        ...state,
        isLoading: false,
        isLogin: false,
        error: 'Email or password incorrect'
      };
    default:
      return state;
  }
}

export const getAuthState = (state: AuthState) => state.user;
export const getAuthAction = (accion: any) => accion.payload;
export const getAuthError = (state: AuthState) => state.error;
export const getAuthLoading = (state: AuthState) => state.isLoading;
export const getAuthLoging = (state: AuthState) => state.isLogin;
