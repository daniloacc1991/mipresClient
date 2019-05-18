import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { EntregaResumen } from '@app-models/index';

export enum EntregaResumenActionsTypes {

  LOAD_ALL = '[Entrega] LOAD_ALL',
  LOAD_ALL_SUCCESS = '[Entrega] LOAD_ALL_SUCCCESS',

  LOAD = '[Entrega] LOAD',
  LOAD_SUCCESS = '[Entrega] LOAD_SUCCESS',

  LOAD_PER_PAGE_TERM = '[PrescripcionEncabezado] LOAD PER PAGE',
  LOAD_PER_PAGE_TERM_SUCCESS = '[PrescripcionEncabezado] LOAD PER PAGE SUCCESS',

  LIVE_CREATED = '[Entrega] LIVE CREATED',
  LIVE_UPDATED = '[Entrega] LIVE UPDATED',

  FAILURE = '[Entrega] FAILURE',

}

export class Load implements Action {
  readonly type = EntregaResumenActionsTypes.LOAD;
  constructor(public payload: number) { }
}

export class LoadSuccess implements Action {
  readonly type = EntregaResumenActionsTypes.LOAD_SUCCESS;
  constructor(public payload: EntregaResumen) { }
}

export class LoadAll implements Action {
  readonly type = EntregaResumenActionsTypes.LOAD_ALL;
  constructor(public payload = null) { }
}

export class LoadAllSuccess implements Action {
  readonly type = EntregaResumenActionsTypes.LOAD_ALL_SUCCESS;
  constructor(public payload: EntregaResumen[]) { }
}

// export class LOAD_PER_PAGE_TERM implements Action {
//   readonly type = EntregaResumenActionsTypes.LOAD_PER_PAGE_TERM;
//   constructor(public payload: { perPage: number, page: number, term: string}) { }
// }

// export class LoadPerPageSuccess implements Action {
//   readonly type = EntregaResumenActionsTypes.LOAD_PER_PAGE_TERM_SUCCESS;
//   constructor(public payload: PrescripcionWrapperTerm) { }
// }

export class Failure implements Action {
  readonly type = EntregaResumenActionsTypes.FAILURE;
  constructor(public payload: { concern: 'LOADALL', error: any }) { }
}

export type EntregaResumenActions =
  Load |
  LoadSuccess |
  LoadAll |
  LoadAllSuccess;