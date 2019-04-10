import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import {
  PRESCRIPCION_DETALLE_ACTIONS_TYPES,
  LoadPorJunta,
  LoadPorJuntaSuccess,
  Load,
  LoadSuccess,
  Create,
  CreateSuccess,
  Put,
  PutSuccess,
  Delete,
  DeleteSuccess,
  Failure
} from '../actions/prescripcion-detalle.actions';
import { PrescripcionDetalleWrapper, RequestWrapper } from '../../interfaces';
import { PrescripcionDetalle } from '@app-models/index';
import { PrescripcionDetalleService } from '../../services/prescripcion-detalle.service';
import { PrescripcionDetalleSocketService } from '../../services/prescripcion-detalle-socket.service';

@Injectable()
export class PrescripcionDetalleEffects {

  @Effect()
  loadPorJunta$: Observable<Action> = this.actions$.pipe(
    ofType(PRESCRIPCION_DETALLE_ACTIONS_TYPES.LOAD_POR_JUNTA),
    map((action: LoadPorJunta) => action.payload),
    switchMap((wrapper: RequestWrapper) => this.prescripcionDetalleService.indexJunta(wrapper).pipe(
      map((prescripcions: PrescripcionDetalleWrapper) => new LoadPorJuntaSuccess(prescripcions)),
      catchError(err => {
        console.error(err);
        return of(new Failure({ concern: 'LOAD', error: err.error }));
      })
    ))
  );

  @Effect()
  load$: Observable<Action> = this.actions$.pipe(
    ofType(PRESCRIPCION_DETALLE_ACTIONS_TYPES.LOAD),
    map((action: Load) => action.payload),
    switchMap((id: number) => this.prescripcionDetalleService.show(id).pipe(
      map((prescripcion: PrescripcionDetalle) => new LoadSuccess(prescripcion)),
      catchError(err => {
        console.error(err);
        return of(new Failure({ concern: 'LOAD', error: err.error }));
      })
    ))
  );

  @Effect()
  create$: Observable<Action> = this.actions$.pipe(
    ofType(PRESCRIPCION_DETALLE_ACTIONS_TYPES.CREATE),
    map((action: Create) => action.payload),
    switchMap((p: PrescripcionDetalle) => this.prescripcionDetalleService.create(p).pipe(
      map((pCreate: PrescripcionDetalle) => new CreateSuccess(pCreate)),
      catchError(err => {
        console.error(err);
        return of(new Failure({ concern: 'CREATE', error: err.error }));
      })
    )),
  );

  @Effect()
  update$: Observable<Action> = this.actions$.pipe(
    ofType(PRESCRIPCION_DETALLE_ACTIONS_TYPES.PUT),
    map((action: Put) => action.payload),
    switchMap((p: PrescripcionDetalle) => this.prescripcionDetalleService.update(p).pipe(
      map((pUpdate: PrescripcionDetalle) => new PutSuccess({ id: pUpdate.id, changes: pUpdate })),
      catchError(err => {
        console.error(err);
        return of(new Failure({ concern: 'PUT', error: err.error }));
      }),
    ))
  );

  @Effect()
  delete$: Observable<Action> = this.actions$.pipe(
    ofType(PRESCRIPCION_DETALLE_ACTIONS_TYPES.DELETE),
    map((action: Delete) => action.payload),
    switchMap((id: number) => this.prescripcionDetalleService.destroy(id).pipe(
      map((idDelete: number) => new DeleteSuccess(idDelete)),
      catchError(err => {
        console.error(err);
        return of(new Failure({ concern: 'DELETE', error: err.error }));
      }),
    ))
  );

  // Socket Live Events
  @Effect()
  liveCreate$: Observable<Action> = this.prescripcrionDetalleSocketService.fromEvent(PRESCRIPCION_DETALLE_ACTIONS_TYPES.LIVE_CREATED).pipe(
    map((p: PrescripcionDetalle) => new CreateSuccess(p))
  );

  @Effect()
  liveUpdate$: Observable<Action> = this.prescripcrionDetalleSocketService.fromEvent(PRESCRIPCION_DETALLE_ACTIONS_TYPES.LIVE_UPDATED).pipe(
    map((p: PrescripcionDetalle) => new PutSuccess({ id: p.id, changes: p }))
  );

  @Effect()
  liveDestroy$: Observable<Action> = this.prescripcrionDetalleSocketService.fromEvent(PRESCRIPCION_DETALLE_ACTIONS_TYPES.LIVE_DELETED).pipe(
    map(id => new DeleteSuccess(+id))
  );

  constructor(
    private actions$: Actions,
    private prescripcionDetalleService: PrescripcionDetalleService,
    private prescripcrionDetalleSocketService: PrescripcionDetalleSocketService,
  ) { }
}