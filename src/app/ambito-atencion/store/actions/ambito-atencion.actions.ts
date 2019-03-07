import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { AmbitoAtencion } from '../../../models/ambito-atencion';

export enum AmbitoAtencionActionsTypes {
  LOAD_ALL = '[AmbitoAtencion] LOAD_ALL',
  LOAD_ALL_SUCCESS = '[AmbitoAtencion] LOAD_ALL_SUCCCESS',

  LOAD = '[AmbitoAtencion] LOAD',
  LOAD_SUCCESS = '[AmbitoAtencion] LOAD_SUCCESS',

  CREATE = '[AmbitoAtencion] CREATE',
  CREATE_SUCCESS = '[AmbitoAtencion] CREATE_SUCCESS',

  PUT = '[AmbitoAtencion] PUT',
  PUT_SUCCESS = '[AmbitoAtencion] PUT_SUCCESS',

  DELETE = '[AmbitoAtencion] DELETE',
  DELETE_SUCCESS = '[AmbitoAtencion] DELETE_SUCCESS',

  FAILURE = '[AmbitoAtencion] FAILURE',

  SET_CURRENT_AMBITO_ATENCION_ID = '[AmbitoAtencion] SET_CURRENT_AMBITO_ATENCION_ID',

  // SERVER SIDE SOCKET ACTIONS

  LIVE_CREATED = '[AmbitoAtencion] LIVE CREATED',
  LIVE_UPDATED = '[AmbitoAtencion] LIVE UPDATED',
  LIVE_DELETED = '[AmbitoAtencion] LIVE DELETED',
}

export class SetCurrentAmbitoAtencionId implements Action {
  readonly type = AmbitoAtencionActionsTypes.SET_CURRENT_AMBITO_ATENCION_ID;
  constructor(public payload: number) { }
}

export class Load implements Action {
  readonly type = AmbitoAtencionActionsTypes.LOAD;
  constructor(public payload: number) { }
}

export class LoadSuccess implements Action {
  readonly type = AmbitoAtencionActionsTypes.LOAD_SUCCESS;
  constructor(public payload: AmbitoAtencion) { }
}

export class LoadAll implements Action {
  readonly type = AmbitoAtencionActionsTypes.LOAD_ALL;
  constructor(public payload = null) { }
}

export class LoadAllSuccess implements Action {
  readonly type = AmbitoAtencionActionsTypes.LOAD_ALL_SUCCESS;
  constructor(public payload: AmbitoAtencion[]) { }
}

export class Create implements Action {
  readonly type = AmbitoAtencionActionsTypes.CREATE;
  constructor(public payload: AmbitoAtencion) { }
}

export class CreateSuccess implements Action {
  readonly type = AmbitoAtencionActionsTypes.CREATE_SUCCESS;
  constructor(public payload: AmbitoAtencion) { }
}

export class Put implements Action {
  readonly type = AmbitoAtencionActionsTypes.PUT;
  constructor(public payload: AmbitoAtencion) { }
}

export class PutSuccess implements Action {
  readonly type = AmbitoAtencionActionsTypes.PUT_SUCCESS;
  constructor(public payload: Update<AmbitoAtencion>) { }
}

export class Delete implements Action {
  readonly type = AmbitoAtencionActionsTypes.DELETE;
  constructor(public payload: number) { }
}

export class DeleteSuccess implements Action {
  readonly type = AmbitoAtencionActionsTypes.DELETE_SUCCESS;
  constructor(public payload: number) { }
}

export class Failure implements Action {
  readonly type = AmbitoAtencionActionsTypes.FAILURE;
  constructor(public payload: { concern: 'CREATE' | 'PUT', error: any }) { }
}

export type AmbitoAtencionActions =
  SetCurrentAmbitoAtencionId |
  Load |
  LoadSuccess |
  LoadAll |
  LoadAllSuccess |
  Create |
  CreateSuccess |
  Put |
  PutSuccess |
  Delete |
  DeleteSuccess;
