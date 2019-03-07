import { Action } from '@ngrx/store';
import { AmbitoAtencion } from '../../models/ambito-atencion';

export enum AmbitoAtencionActionsTypes {
  LOAD_ALL = '[AmbitoAtencion] LOAD_ALL',
  LOAD_ALL_SUCCESS = '[AmbitoAtencion] LOAD_ALL_SUCCCESS',

  LOAD = '[AmbitoAtencion] LOAD',
  LOAD_SUCCESS = '[AmbitoAtencion] LOAD_SUCCESS',

  SET_CURRENT_AMBITO_ATENCION_ID = '[AmbitoAtencion] SET_CURRENT_AMBITO_ATENCION_ID',
}

export class SetCurrentPrescripcionId implements Action {
  readonly type = AmbitoAtencionActionsTypes.SET_CURRENT_AMBITO_ATENCION_ID;
  constructor(public payload: number) { }
}

export class Load implements Action {
  readonly type = AmbitoAtencionActionsTypes.LOAD;
  constructor(public payload: number ) {}
}

export class LoadSuccess implements Action {
  readonly type = AmbitoAtencionActionsTypes.LOAD_SUCCESS;
  constructor(public payload: AmbitoAtencion ) {}
}

export class LoadAll implements Action {
  readonly type = AmbitoAtencionActionsTypes.LOAD_ALL;
  constructor(public payload = null) { }
}

export class LoadAllSuccess implements Action {
  readonly type = AmbitoAtencionActionsTypes.LOAD_ALL_SUCCESS;
  constructor(public payload: AmbitoAtencion[]) { }
}

export type AmbitoAtencionActions =
  SetCurrentPrescripcionId |
  Load |
  LoadSuccess |
  LoadAll |
  LoadAllSuccess;
