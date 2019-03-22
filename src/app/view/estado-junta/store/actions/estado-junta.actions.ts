import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { EstadoJunta } from '@app-models/index';

export enum EstadoJuntaActionsTypes {
  LOAD_ALL = '[EstadoJunta] LOAD_ALL',
  LOAD_ALL_SUCCESS = '[EstadoJunta] LOAD_ALL_SUCCESS',

  LOAD = '[EstadoJunta] LOAD',
  LOAD_SUCCESS = '[EstadoJunta] LOAD_SUCCESS',

  CREATE = '[EstadoJunta] CREATE',
  CREATE_SUCCESS = '[EstadoJunta] CREATE_SUCCESS',

  PUT = '[EstadoJunta] PUT',
  PUT_SUCCESS = '[EstadoJunta] PUT_SUCCESS',

  DELETE = '[EstadoJunta] DELETE',
  DELETE_SUCCESS = '[EstadoJunta] DELETE_SUCCESS',

  FAILURE = '[EstadoJunta] FAILURE',

  SET_CURRENT_ESTADO_JUNTA_ID = '[EstadoJunta] SET_CURRENT_ESTADO_JUNTA_ID',

  // SERVER SIDE SOCKET ACTIONS
  LIVE_CREATED = '[EstadoJunta] LIVE CREATED',
  LIVE_UPDATED = '[EstadoJunta] LIVE UPDATED',
  LIVE_DELETED = '[EstadoJunta] LIVE DELETED',
}

export class SetCurrentEstadoJuntaId implements Action {
  readonly type = EstadoJuntaActionsTypes.SET_CURRENT_ESTADO_JUNTA_ID;
  constructor(public payload: number) { }
}

export class LoadAll implements Action {
  readonly type = EstadoJuntaActionsTypes.LOAD_ALL;
  constructor(public payload = null) { }
}

export class LoadAllSuccess implements Action {
  readonly type = EstadoJuntaActionsTypes.LOAD_ALL_SUCCESS;
  constructor(public payload: EstadoJunta[]) { }
}

export class Load implements Action {
  readonly type = EstadoJuntaActionsTypes.LOAD;
  constructor(public payload: number) { }
}

export class LoadSuccess implements Action {
  readonly type = EstadoJuntaActionsTypes.LOAD_SUCCESS;
  constructor(public payload: EstadoJunta) { }
}

export class Create implements Action {
  readonly type = EstadoJuntaActionsTypes.CREATE;
  constructor(public payload: EstadoJunta) { }
}

export class CreateSuccess implements Action {
  readonly type = EstadoJuntaActionsTypes.CREATE_SUCCESS;
  constructor(public payload: EstadoJunta) { }
}

export class Put implements Action {
  readonly type = EstadoJuntaActionsTypes.PUT;
  constructor(public payload: EstadoJunta) { }
}

export class PutSuccess implements Action {
  readonly type = EstadoJuntaActionsTypes.PUT_SUCCESS;
  constructor(public payload: Update<EstadoJunta>) { }
}

export class Delete implements Action {
  readonly type = EstadoJuntaActionsTypes.DELETE;
  constructor(public payload: number) { }
}

export class DeleteSuccess implements Action {
  readonly type = EstadoJuntaActionsTypes.DELETE_SUCCESS
  constructor(public payload: number) { }
}

export class Failure implements Action {
  readonly type = EstadoJuntaActionsTypes.FAILURE;
  constructor(public payload: { concern: 'CREATE' | 'PUT', error: any }) { }
}

export type AllEstadoJuntaActions = 
  | SetCurrentEstadoJuntaId
  | LoadAll
  | LoadAllSuccess
  | Load
  | LoadSuccess
  | Create
  | CreateSuccess
  | Put
  | PutSuccess
  | Delete
  | DeleteSuccess;