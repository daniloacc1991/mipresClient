import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity/src/models';
import { Prescripcion } from '@app-models/index';

export enum PrescripcionEncabezadoActionsTypes {

  LOAD_ALL = '[PrescripcionEncabezado] LOAD ALL',
  LOAD_ALL_SUCCESS = '[PrescripcionEncabezado] LOAD ALL SUCCESS',

  LOAD = '[PrescripcionEncabezado] LOAD',
  LOAD_SUCCESS = '[PrescripcionEncabezado] LOAD SUCCESS',

  CREATE = '[PrescripcionEncabezado] CREATE',
  CREATE_SUCCESS = '[PrescripcionEncabezado] CREATE SUCCESS',

  PUT = '[PrescripcionEncabezado] PUT',
  PUT_SUCCESS = '[PrescripcionEncabezado] PUR SUCCESS',

  DELETE = '[PrescripcionEncabezado] DELETE',
  DELETE_SUCCESS = '[PrescripcionEncabezado] DELETE SUCCESS',

  FAILURE = '[PrescripcionEncabezado] FAILURE',

  SET_CURRENT_PRESCRIPCION_ID = '[PrescripcionEncabezado] SET_CURRENT_PRESCRIPCION_ID',

  // SERVER SOCKET ACTIONS
  LIVE_CREATED = '[PrescripcionEncabezado] LIVE CREATED',
  LIVE_UPDATED = '[PrescripcionEncabezado] LIVE UPDATED',
  LIVE_DELETED = '[PrescripcionEncabezado] LIVE DELETED',

}

export class SetCurrentPrescripcionId implements Action {
  readonly type = PrescripcionEncabezadoActionsTypes.SET_CURRENT_PRESCRIPCION_ID;
  constructor(public payload: number) { }
}

export class LoadAll implements Action {
  readonly type = PrescripcionEncabezadoActionsTypes.LOAD_ALL;
  constructor(public payload = null) { }
}

export class Load implements Action {
  readonly type = PrescripcionEncabezadoActionsTypes.LOAD;
  constructor(public payload: number) { }
}

export class Create implements Action {
  readonly type = PrescripcionEncabezadoActionsTypes.CREATE;
  constructor(public payload: Prescripcion) { }
}

export class Put implements Action {
  readonly type = PrescripcionEncabezadoActionsTypes.PUT;
  constructor(public payload: Prescripcion) { }
}

export class Delete implements Action {
  readonly type = PrescripcionEncabezadoActionsTypes.DELETE;
  constructor(public payload: number) { }
}

export class LoadAllSuccess implements Action {
  readonly type = PrescripcionEncabezadoActionsTypes.LOAD_ALL_SUCCESS;
  constructor(public payload: any) { }
}

export class LoadSuccess implements Action {
  readonly type = PrescripcionEncabezadoActionsTypes.LOAD_SUCCESS;
  constructor(public payload: Prescripcion) { }
}

export class CreateSuccess implements Action {
  readonly type = PrescripcionEncabezadoActionsTypes.CREATE_SUCCESS;
  constructor(public payload: Prescripcion) { }
}

export class PutSuccess implements Action {
  readonly type = PrescripcionEncabezadoActionsTypes.PUT_SUCCESS;
  constructor(public payload: Update<Prescripcion>) { }
}

export class DeleteSuccess implements Action {
  readonly type = PrescripcionEncabezadoActionsTypes.DELETE_SUCCESS;
  constructor(public payload: number) { }
}

export class Failure implements Action {
  readonly type = PrescripcionEncabezadoActionsTypes.FAILURE;
  constructor(public payload: { concern: 'CREATE' | 'PUT', error: any }) { }
}

export type All =
  | SetCurrentPrescripcionId
  | LoadAll
  | Load
  | Create
  | Put
  | Delete
  | LoadAllSuccess
  | LoadSuccess
  | PutSuccess
  | CreateSuccess
  | DeleteSuccess
  | LoadAllSuccess
  | Failure;
