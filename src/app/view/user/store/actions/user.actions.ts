import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { User } from '@app-models/index';

export enum UserActionsTypes {
  LOAD = '[User] LOAD',
  LOAD_SUCCESS = '[User] LOAD_SUCCESS',

  LOAD_ALL = '[User] LOAD_ALL',
  LOAD_ALL_SUCCESS = '[User] LOAD_ALL_SUCCESS',

  CREATE = '[User] CREATE',
  CREATE_SUCCESS = '[User] CREATE_SUCCESS',

  PUT = '[User] PUT',
  PUT_SUCCESS = '[User] PUT_SUCCESS',

  DELETE = '[User] DELETE',
  DELETE_SUCCESS = '[User] DELETE_SUCCESS',

  FAILURE = '[User] FAILURE',

  SET_CURRENT_USER_ID = '[User] SET_CURRENT_USER_ID',

  // SERVER SIDE SOCKET ACTIONS
  LIVE_CREATED = '[User] LIVE CREATED',
  LIVE_UPDATED = '[User] LIVE UPDATED',
  LIVE_DELETED = '[User] LIVE DELETED',
}

export class SetCurrentUserId implements Action {
  readonly type = UserActionsTypes.SET_CURRENT_USER_ID;
  constructor(public payload: number) { }
}

export class LoadAll implements Action {
  readonly type = UserActionsTypes.LOAD;
  constructor(public payload = null) { }
}

export class LoadAllSuccess implements Action {
  readonly type = UserActionsTypes.LOAD_ALL_SUCCESS;
  constructor(public payload: User[]) { }
}

export class Load implements Action {
  readonly type = UserActionsTypes.LOAD;
  constructor(public payload: number) { }
}

export class LoadSuccess implements Action {
  readonly type = UserActionsTypes.LOAD_SUCCESS;
  constructor(public payload: User) { }
}

export class Create implements Action {
  readonly type = UserActionsTypes.CREATE;
  constructor(public payload: User) { }
}

export class CreateSuccess implements Action {
  readonly type = UserActionsTypes.CREATE_SUCCESS;
  constructor(public payload: User) { }
}

export class Put implements Action {
  readonly type = UserActionsTypes.PUT;
  constructor(public payload: User) { }
}

export class PutSuccess implements Action {
  readonly type = UserActionsTypes.PUT_SUCCESS;
  constructor(public payload: Update<User>) { }
}

export class Delete implements Action {
  readonly type = UserActionsTypes.DELETE;
  constructor(public payload: number) { }
}

export class DeleteSuccess implements Action {
  readonly type = UserActionsTypes.DELETE_SUCCESS;
  constructor(public payload: number) { }
}

export class Failure implements Action {
  readonly type = UserActionsTypes.FAILURE;
  constructor(public payload: { concern: 'LOAD' | 'CREATE' | 'PUT' | 'DELETE', error: any }) { }
}

export type AllUserActionsTypes =
  SetCurrentUserId |
  LoadAll |
  LoadAllSuccess |
  Load |
  LoadSuccess |
  Create |
  CreateSuccess |
  Put |
  PutSuccess |
  Delete |
  DeleteSuccess |
  Failure;
