import { Action } from '@ngrx/store';
import { UserCredentials } from '../../models/user-credential';

export enum AuthActionsType {
  LOGIN_USER = '[Auth] LOGIN_USER',
  LOGIN_USER_SUCCESS = '[Auth] LOGIN_USER_SUCCESS',

  LOGOUT_USER = '[Auth] LOGOUT_USER',
  LOGOUT_USER_SUCCESS = '[Auth] LOGOUT_USER_SUCCESS',

  LOGIN_ERROR = '[Auth] LOGIN_ERROR',
}

export class LoginUser implements Action {
  readonly type = AuthActionsType.LOGIN_USER;
  constructor(public payload: UserCredentials) { }
}

export class LoginUserSuccess implements Action {
  readonly type = AuthActionsType.LOGIN_USER_SUCCESS;
  constructor(public payload: any) { }
}

export class LogoutUser implements Action {
  readonly type = AuthActionsType.LOGOUT_USER;
  constructor(public payload = null) { }
}

export class LogoutUserSuccess implements Action {
  readonly type = AuthActionsType.LOGOUT_USER_SUCCESS;
  constructor(public payload: any) { }
}

export class LoginError implements Action {
  readonly type = AuthActionsType.LOGIN_ERROR;
  constructor(public payload: { concern: string, error: any }) { }
}


export type All =
  LoginUser |
  LoginUserSuccess |
  LogoutUser |
  LogoutUserSuccess |
  LoginError;
