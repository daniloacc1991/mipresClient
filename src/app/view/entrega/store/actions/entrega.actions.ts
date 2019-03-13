import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Entrega, PrescripcionDetalle } from '@app-models/index';

export enum EntregaActionsTypes {
  LOAD_ALL = '[Entrega] LOAD_ALL',
  LOAD_ALL_SUCCESS = '[Entrega] LOAD_ALL_SUCCCESS',

  LOAD = '[Entrega] LOAD',
  LOAD_SUCCESS = '[Entrega] LOAD_SUCCESS',

  CREATE = '[Entrega] CREATE',
  CREATE_SUCCESS = '[Entrega] CREATE_SUCCESS',

  PUT = '[Entrega] PUT',
  PUT_SUCCESS = '[Entrega] PUT_SUCCESS',

  DELETE = '[Entrega] DELETE',
  DELETE_SUCCESS = '[Entrega] DELETE_SUCCESS',

  LOAD_DETAIL = '[Entrega] LOAD_DETAIL',
  LOAD_DETAIL_SUCCESS = '[Entrega] LOAD_DETAIL_SUCCESS',

  FAILURE = '[Entrega] FAILURE',

  SET_CURRENT_ENTREGA_ID = '[Entrega] SET_CURRENT_ENTREGA_ID',

  // SERVER SIDE SOCKET ACTIONS

  LIVE_CREATED = '[Entrega] LIVE CREATED',
  LIVE_UPDATED = '[Entrega] LIVE UPDATED',
  LIVE_DELETED = '[Entrega] LIVE DELETED',
}

export class LoadDetail implements Action {
  readonly type = EntregaActionsTypes.LOAD_DETAIL;
  constructor(public payload: number) {}
}

export class LoadDetailSuccess implements Action {
  readonly type = EntregaActionsTypes.LOAD_DETAIL_SUCCESS;
  constructor(public payload: PrescripcionDetalle) {}
}

export class SetCurrentEntregaId implements Action {
  readonly type = EntregaActionsTypes.SET_CURRENT_ENTREGA_ID;
  constructor(public payload: number) { }
}

export class Load implements Action {
  readonly type = EntregaActionsTypes.LOAD;
  constructor(public payload: number) { }
}

export class LoadSuccess implements Action {
  readonly type = EntregaActionsTypes.LOAD_SUCCESS;
  constructor(public payload: Entrega) { }
}

export class LoadAll implements Action {
  readonly type = EntregaActionsTypes.LOAD_ALL;
  constructor(public payload = null) { }
}

export class LoadAllSuccess implements Action {
  readonly type = EntregaActionsTypes.LOAD_ALL_SUCCESS;
  constructor(public payload: Entrega[]) { }
}

export class Create implements Action {
  readonly type = EntregaActionsTypes.CREATE;
  constructor(public payload: Entrega) { }
}

export class CreateSuccess implements Action {
  readonly type = EntregaActionsTypes.CREATE_SUCCESS;
  constructor(public payload: Entrega) { }
}

export class Put implements Action {
  readonly type = EntregaActionsTypes.PUT;
  constructor(public payload: Entrega) { }
}

export class PutSuccess implements Action {
  readonly type = EntregaActionsTypes.PUT_SUCCESS;
  constructor(public payload: Update<Entrega>) { }
}

export class Delete implements Action {
  readonly type = EntregaActionsTypes.DELETE;
  constructor(public payload: number) { }
}

export class DeleteSuccess implements Action {
  readonly type = EntregaActionsTypes.DELETE_SUCCESS;
  constructor(public payload: number) { }
}

export class Failure implements Action {
  readonly type = EntregaActionsTypes.FAILURE;
  constructor(public payload: { concern: 'CREATE' | 'PUT' | 'LOAD_DETAIL', error: any }) { }
}

export type EntregaActions =
  SetCurrentEntregaId |
  Load |
  LoadSuccess |
  LoadAll |
  LoadAllSuccess |
  Create |
  CreateSuccess |
  Put |
  PutSuccess |
  Delete |
  DeleteSuccess |
  LoadDetail |
  LoadDetailSuccess;
