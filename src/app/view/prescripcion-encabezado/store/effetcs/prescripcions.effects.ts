import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';

import {
  PrescripcionEncabezadoActionsTypes,
  Create,
  CreateSuccess,
  Delete,
  DeleteSuccess,
  Failure,
  Load,
  LoadAll,
  LoadAllSuccess,
  LoadSuccess,
  Put,
  PutSuccess
} from '../actions/prescripcions.actions';

import { Actions, Effect, ofType } from '@ngrx/effects';
import { Prescripcion } from '@app-models/index';
import { PrescripcionEncabezadoService } from '../../services/prescripcion-encabezado.service';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { PrescripcionEncabezadoSocketsService } from '../../services/prescripcion-encabezado-sockets.service';

@Injectable()
export class PrescripcionsEffects {

  @Effect()
  LoadAll$: Observable<Action> = this.actions$.pipe(
    ofType(PrescripcionEncabezadoActionsTypes.LOAD_ALL),
    startWith(new LoadAll()),
    switchMap(() => {
      return this.prescripcionsService.index();
    }),
    map((prescripcions: Prescripcion) => new LoadAllSuccess(prescripcions))
  );

  @Effect()
  load$: Observable<Action> = this.actions$.pipe(
    ofType(PrescripcionEncabezadoActionsTypes.LOAD),
    map((action: Load) => action.payload),
    switchMap((id) => this.prescripcionsService.show(id)),
    map((prescripcion: Prescripcion) => new LoadSuccess(prescripcion))
  );

  @Effect()
  create$: Observable<Action> = this.actions$.pipe(
    ofType(PrescripcionEncabezadoActionsTypes.CREATE),
    map((action: Create) => action.payload),
    switchMap((prescripcion) => this.prescripcionsService.create(prescripcion)),
    map((createdPrescripcion: Prescripcion) => new CreateSuccess(createdPrescripcion)),
    catchError(err => {
      alert(err.message);
      return of(new Failure({ concern: 'CREATE', error: err }));
    })
  );

  @Effect()
  update$: Observable<Action> = this.actions$.pipe(
    ofType(PrescripcionEncabezadoActionsTypes.PUT),
    map((action: Put) => action.payload),
    switchMap((prescripcion: Prescripcion) => this.prescripcionsService.update(prescripcion)),
    map((updatedPrescripcion: Prescripcion) => new PutSuccess({
      id: updatedPrescripcion.id,
      changes: updatedPrescripcion
    })),
    catchError(err => {
      alert(err.message);
      return of(new Failure({ concern: 'PUT', error: err }));
    })
  );

  @Effect()
  destroy$: Observable<Action> = this.actions$.pipe(
    ofType(PrescripcionEncabezadoActionsTypes.DELETE),
    map((action: Delete) => action.payload),
    switchMap(
      (id: number) => this.prescripcionsService.destroy(id).pipe(
        map(() => new DeleteSuccess(id))
      )
    )
  );

  // Socket Live Events
  @Effect()
  liveCreate$: Observable<Action> = this.prescripcionsSocket.fromEvent(PrescripcionEncabezadoActionsTypes.LIVE_CREATED).pipe(
    map((prescripcion: Prescripcion) => new CreateSuccess(prescripcion))
  );


  @Effect()
  liveUpdate$: Observable<Action> = this.prescripcionsSocket.fromEvent(PrescripcionEncabezadoActionsTypes.LIVE_UPDATED).pipe(
    map((prescripcion: Prescripcion) => new PutSuccess({
      id: prescripcion.id, changes: prescripcion
    }))
  );

  @Effect()
  liveDestroy$: Observable<Action> = this.prescripcionsSocket.fromEvent(PrescripcionEncabezadoActionsTypes.LIVE_DELETED).pipe(
    map(id => new DeleteSuccess(+id))
  );

  constructor(
    private actions$: Actions,
    private prescripcionsService: PrescripcionEncabezadoService,
    private prescripcionsSocket: PrescripcionEncabezadoSocketsService
  ) { }
}
