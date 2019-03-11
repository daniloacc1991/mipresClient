import { Action } from '@ngrx/store';
import { UserCredentials } from '../../models/user-credential';

export enum AuthActionType {
  LOGGED_USER = '[Auth] LOGGED_USER',
  LOGIN_USER = '[Auth] LOGIN_USER',
  LOGIN_USER_ERROR = '[Auth] LOGIN_USER_ERROR',
  LOGGED_IN = '[Auth] LOGGED_IN',
  LOGOUT_AUTH = '[Auth] LOGOUT_AUTH',
}

export class LoggerIn implements Action {
  readonly type = AuthActionType.LOGGED_IN;
  constructor(public payload: { isLoading: boolean }) { }
}

export class LoginUser implements Action {
  readonly type = AuthActionType.LOGIN_USER;
  constructor(public payload: { user: UserCredentials }) { }
}

export class LoggedUser implements Action {
  readonly type = AuthActionType.LOGGED_USER;
  constructor(public payload: { user: any }) { }
}

export class LoginUserError implements Action {
  readonly type = AuthActionType.LOGIN_USER_ERROR;
  constructor(public payload: { error: string }) { }
}

export class LogoutAuth implements Action {
  readonly type = AuthActionType.LOGOUT_AUTH;
  constructor(public payload: { isLogin: boolean }) { }
}

export type All = LoggedUser | LoginUser | LogoutAuth | LoggerIn | LoginUserError;
