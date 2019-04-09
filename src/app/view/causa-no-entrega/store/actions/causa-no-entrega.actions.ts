import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { CausaNoEntrega } from '@app-models/index';

export enum CAUSA_NO_ENTREGA_ACTIONS_TYPES {

  LOAD_ALL = '[CausaNoEntrega] LOAD ALL',
  LOAD_ALL_SUCCESS = '[CausaNoEntrega] LOAD ALL SUCCESS',

  LOAD = '[CausaNoEntrega] LOAD',
  LOAD_SUCCESS = '[CausaNoEntrega] LOAD SUCCESS',

  CREATE = '[CausaNoEntrega] CREATE',
  CREATE_SUCCESS = '[CausaNoEntrega] CREATE SUCCESS',

  PUT = '[CausaNoEntrega] PUT',
  PUT_SUCCESS = '[CausaNoEntrega] PUT SUCCESS',

  DELETE = '[CausaNoEntrega] DELETE',
  DELETE_SUCCESS = '[CausaNoEntrega] DELETE SUCCESS',

  FAILURE = '[CausaNoEntrega] FAILURE',

  SET_CURRENT_CAUSA_NO_ENTREGA_ID = '[CausaNoEntrega] SET_CURRENT_CAUSA_NO_ENTREGA_ID',

  LIVE_CREATED = '[CausaNoEntrega] LIVE CREATED',
  LIVE_UPDATED = '[CausaNoEntrega] LIVE UPDATED',
  LIVE_DELETED = '[CausaNoEntrega] LIVE DELETED',

}

export class SetCurrentCausaNoEntregaId implements Action {
  readonly type = CAUSA_NO_ENTREGA_ACTIONS_TYPES.SET_CURRENT_CAUSA_NO_ENTREGA_ID;
  constructor(public payload: number) { }
}

export class LoadAll implements Action {
  readonly type = CAUSA_NO_ENTREGA_ACTIONS_TYPES.LOAD_ALL;
  constructor(public payload = null) { }
}

export class LoadAllSuccess implements Action {
  readonly type = CAUSA_NO_ENTREGA_ACTIONS_TYPES.LOAD_ALL_SUCCESS;
  constructor(public payload: CausaNoEntrega[]) { }
}

export class Load implements Action {
  readonly type = CAUSA_NO_ENTREGA_ACTIONS_TYPES.LOAD;
  constructor(public payload: number) { }
}

export class LoadSuccess implements Action {
  readonly type = CAUSA_NO_ENTREGA_ACTIONS_TYPES.LOAD_SUCCESS;
  constructor(public payload: CausaNoEntrega) { }
}

export class Create implements Action {
  readonly type = CAUSA_NO_ENTREGA_ACTIONS_TYPES.CREATE;
  constructor(public payload: CausaNoEntrega) { }
}

export class CreateSuccess implements Action {
  readonly type = CAUSA_NO_ENTREGA_ACTIONS_TYPES.CREATE_SUCCESS;
  constructor(public payload: CausaNoEntrega) { }
}

export class Put implements Action {
  readonly type = CAUSA_NO_ENTREGA_ACTIONS_TYPES.PUT;
  constructor(public payload: CausaNoEntrega) { }
}

export class PutSuccess implements Action {
  readonly type = CAUSA_NO_ENTREGA_ACTIONS_TYPES.PUT_SUCCESS;
  constructor(public payload: Update<CausaNoEntrega>) { }
}

export class Delete implements Action {
  readonly type = CAUSA_NO_ENTREGA_ACTIONS_TYPES.DELETE;
  constructor(public payload: number) { }
}

export class DeleteSuccess implements Action {
  readonly type = CAUSA_NO_ENTREGA_ACTIONS_TYPES.DELETE_SUCCESS;
  constructor(public payload: number) { }
}

export class Failure implements Action {
  readonly type = CAUSA_NO_ENTREGA_ACTIONS_TYPES.FAILURE;
  constructor(public payload: { concern: 'CREATE' | 'PUT' | 'LOAD' | 'DELETE', error: any }) { }
}

export type AllCausaNoEntregaActions =
  | SetCurrentCausaNoEntregaId
  | LoadAll
  | LoadAllSuccess
  | Load
  | LoadSuccess
  | Create
  | CreateSuccess
  | Put
  | PutSuccess
  | Delete
  | DeleteSuccess
  | Failure;
