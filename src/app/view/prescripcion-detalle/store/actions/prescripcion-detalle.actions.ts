import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { PrescripcionDetalle } from '@app-models/index';
import { PrescripcionDetalleWrapper, RequestWrapper } from '../../interfaces';

export enum PRESCRIPCION_DETALLE_ACTIONS_TYPES {

  LOAD = '[PrescripcionDetalle] LOAD',
  LOAD_SUCCESS = '[PrescripcionDetalle] LOAD SUCCESS',

  LOAD_ALL = '[PrescripcionDetalle] LOAD ALL',
  LOAD_ALL_SUCCESS = '[PrescripcionDetalle] LOAD ALL SUCCESS',

  LOAD_PER_PAGE = '[PrescripcionDetalle] LOAD PER PAGE',
  LOAD_PER_PAGE_SUCCESS = '[PrescripcionDetalle] LOAD PER PAGE SUCCESS',

  LOAD_POR_JUNTA = '[PrescripcionDetalle] LOAD POR JUNTA',
  LOAD_POR_JUNTA_SUCCESS = '[PrescripcionDetalle] LOAD POR JUNTA SUCCESS',

  CREATE = '[PrescripcionDetalle] CREATE',
  CREATE_SUCCESS = '[PrescripcionDetalle] CREATE SUCCESS',

  PUT = '[PrescripcionDetalle] PUT',
  PUT_SUCCESS = '[PrescripcionDetalle] PUT SUCCESS',

  DELETE = '[PrescripcionDetalle] DELETE',
  DELETE_SUCCESS = '[PrescripcionDetalle] DELETE SUCCESS',

  FAILURE = '[PrescripcionDetalle] FAILURE',

  SET_CURRENT_PRESCRIPCION_DETALLE_ID = '[PrescripcionDetalle] SET_CURRENT_PRESCRIPCION_DETALLE_ID',

  LIVE_CREATED = '[PrescripcionDetalle] LIVE CREATED',
  LIVE_UPDATED = '[PrescripcionDetalle] LIVE UPDATED',
  LIVE_DELETED = '[PrescripcionDetalle] LIVE DELETED',

}

export class SetCurrentPrescripcionDetalleId implements Action {
  readonly type = PRESCRIPCION_DETALLE_ACTIONS_TYPES.SET_CURRENT_PRESCRIPCION_DETALLE_ID;
  constructor(public payload: number) { }
}

export class LoadAll implements Action {
  readonly type = PRESCRIPCION_DETALLE_ACTIONS_TYPES.LOAD_ALL;
  constructor(public payload = null) { }
}

export class LoadAllSuccess implements Action {
  readonly type = PRESCRIPCION_DETALLE_ACTIONS_TYPES.LOAD_ALL_SUCCESS;
  constructor(public payload: PrescripcionDetalle[]) { }
}

export class Load implements Action {
  readonly type = PRESCRIPCION_DETALLE_ACTIONS_TYPES.LOAD;
  constructor(public payload: number) { }
}

export class LoadSuccess implements Action {
  readonly type = PRESCRIPCION_DETALLE_ACTIONS_TYPES.LOAD_SUCCESS;
  constructor(public payload: PrescripcionDetalle) { }
}

export class Create implements Action {
  readonly type = PRESCRIPCION_DETALLE_ACTIONS_TYPES.CREATE;
  constructor(public payload: PrescripcionDetalle) { }
}

export class CreateSuccess implements Action {
  readonly type = PRESCRIPCION_DETALLE_ACTIONS_TYPES.CREATE_SUCCESS;
  constructor(public payload: PrescripcionDetalle) { }
}

export class Put implements Action {
  readonly type = PRESCRIPCION_DETALLE_ACTIONS_TYPES.PUT;
  constructor(public payload: PrescripcionDetalle) { }
}

export class PutSuccess implements Action {
  readonly type = PRESCRIPCION_DETALLE_ACTIONS_TYPES.PUT_SUCCESS;
  constructor(public payload: Update<PrescripcionDetalle>) { }
}

export class Delete implements Action {
  readonly type = PRESCRIPCION_DETALLE_ACTIONS_TYPES.DELETE;
  constructor(public payload: number) { }
}

export class DeleteSuccess implements Action {
  readonly type = PRESCRIPCION_DETALLE_ACTIONS_TYPES.DELETE_SUCCESS;
  constructor(public payload: number) { }
}

export class LoadPerPage implements Action {
  readonly type = PRESCRIPCION_DETALLE_ACTIONS_TYPES.LOAD_PER_PAGE;
  constructor(public payload: RequestWrapper) { }
}

export class LoadPerPageSuccess implements Action {
  readonly type = PRESCRIPCION_DETALLE_ACTIONS_TYPES.LOAD_PER_PAGE_SUCCESS;
  constructor(public payload: PrescripcionDetalleWrapper) { }
}

export class LoadPorJunta implements Action {
  readonly type = PRESCRIPCION_DETALLE_ACTIONS_TYPES.LOAD_POR_JUNTA;
  constructor(public payload: RequestWrapper) { }
}

export class LoadPorJuntaSuccess implements Action {
  readonly type = PRESCRIPCION_DETALLE_ACTIONS_TYPES.LOAD_POR_JUNTA_SUCCESS;
  constructor(public payload: PrescripcionDetalleWrapper) { }
}

export class Failure implements Action {
  readonly type = PRESCRIPCION_DETALLE_ACTIONS_TYPES.FAILURE;
  constructor(public payload: { concern: 'CREATE' | 'PUT' | 'LOAD' | 'DELETE', error: any }) { }
}

export type AllPrescripcionDetalleActions =
  | SetCurrentPrescripcionDetalleId
  | Load
  | LoadSuccess
  | LoadAll
  | LoadAllSuccess
  | LoadPerPage
  | LoadPerPageSuccess
  | LoadPorJunta
  | LoadPorJuntaSuccess
  | Create
  | CreateSuccess
  | Put
  | PutSuccess
  | Delete
  | DeleteSuccess
  | Failure;
