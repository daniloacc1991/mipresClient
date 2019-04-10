import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import {
  PrescripcionEncabezadoActionsTypes,
  Create,
  CreateSuccess,
  Delete,
  DeleteSuccess,
  Failure,
  Load,
  LoadSuccess,
  Put,
  PutSuccess,
  Import,
  ImportSuccess,
  LoadPerPage,
  LoadPerPageSuccess,
} from '../actions/prescripcions.actions';
import { Prescripcion, ImportarxFecha, ImportaFechaSuccess } from '@app-models/index';
import { PrescripcionEncabezadoService } from '../../services/prescripcion-encabezado.service';
import { PrescripcionEncabezadoSocketsService } from '../../services/prescripcion-encabezado-sockets.service';
import { PrescripcionWrapperTerm } from '../../interfaces';

@Injectable()
export class PrescripcionsEffects {

  @Effect()
  LoadPerPage$: Observable<Action> = this.actions$.pipe(
    ofType(PrescripcionEncabezadoActionsTypes.LOAD_PER_PAGE),
    map((action: LoadPerPage) => action.payload),
    switchMap((wrapper) => this.prescripcionsService.index(wrapper.perPage, wrapper.page, wrapper.term)),
    map((prescripcionWrapper: PrescripcionWrapperTerm) => new LoadPerPageSuccess(prescripcionWrapper))
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

  @Effect()
  import$: Observable<Action> = this.actions$.pipe(
    ofType(PrescripcionEncabezadoActionsTypes.IMPORT),
    map((action: Import) => action.payload),
    switchMap((data: ImportarxFecha) => this.prescripcionsService.importarFecha(data)),
    map((importSuccess: ImportaFechaSuccess) => new ImportSuccess(importSuccess)),
    catchError(err => {
      alert(err.message);
      return of(new Failure({ concern: 'IMPORT', error: err }));
    })
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

  @Effect()
  liveImport$: Observable<Action> = this.prescripcionsSocket.fromEvent(PrescripcionEncabezadoActionsTypes.LIVE_IMPORTED).pipe(
    map((importSuccess: ImportaFechaSuccess) => new ImportSuccess(importSuccess))
  );

  constructor(
    private actions$: Actions,
    private prescripcionsService: PrescripcionEncabezadoService,
    private prescripcionsSocket: PrescripcionEncabezadoSocketsService
  ) { }
}
