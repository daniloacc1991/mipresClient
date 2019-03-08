import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { AmbitoAtencionService } from '../../services/ambito-atencion.service';
import {
  AmbitoAtencionActionsTypes,
  LoadAll,
  LoadAllSuccess,
  Load,
  Create,
  CreateSuccess,
  Failure,
  Put,
  PutSuccess,
  DeleteSuccess,
  Delete
} from '../actions/ambito-atencion.actions';
import { AmbitoAtencion } from '@app-models/index';
import { AmbitoAtencionSocketsService } from '../../services/ambito-atencion-sockets.service';

@Injectable({
  providedIn: 'root'
})
export class AmbitoAtencionEffects {

  @Effect()
  loadAll$: Observable<Action> = this.actions$.pipe(
    ofType(AmbitoAtencionActionsTypes.LOAD_ALL),
    startWith(new LoadAll()),
    switchMap(() => this.ambitoAtencionService.findAll()),
    map((ambitos: AmbitoAtencion[]) => new LoadAllSuccess(ambitos)),
  );

  @Effect()
  load$: Observable<Action> = this.actions$.pipe(
    ofType(AmbitoAtencionActionsTypes.LOAD),
    map((action: Load) => action.payload),
    switchMap((id) => this.ambitoAtencionService.show(id)),
    map((ambito: AmbitoAtencion) => new LoadAll(ambito)),
  );

  @Effect()
  create$: Observable<Action> = this.actions$.pipe(
    ofType(AmbitoAtencionActionsTypes.CREATE),
    map((action: Create) => action.payload),
    switchMap((ambitoAtencion) => this.ambitoAtencionService.create(ambitoAtencion)),
    map((createdAmbito: AmbitoAtencion) => new CreateSuccess(createdAmbito)),
    catchError(err => {
      alert(err['message']);
      return of(new Failure({ concern: 'CREATE', error: err }));
    }),
  );

  @Effect()
  update$: Observable<Action> = this.actions$.pipe(
    ofType(AmbitoAtencionActionsTypes.PUT),
    map((action: Put) => action.payload),
    switchMap((ambito: AmbitoAtencion) => this.ambitoAtencionService.update(ambito)),
    map((updatedAmbito: AmbitoAtencion) => new PutSuccess({
      id: updatedAmbito.id,
      changes: updatedAmbito
    })
    ),
    catchError(err => {
      alert(err['message']);
      return of(new Failure({ concern: 'PUT', error: err }))
    })
  );

  @Effect()
  destroy$: Observable<Action> = this.actions$.pipe(
    ofType(AmbitoAtencionActionsTypes.DELETE),
    map((action: Delete) => action.payload),
    switchMap(
      (id: number) => this.ambitoAtencionService.destroy(id).pipe(
        map(() => new DeleteSuccess(id))
      )
    )
  );

  // Socket Live Events
  @Effect()
  liveCreate$: Observable<Action> = this.ambitoAtencionSocket.fromEvent(AmbitoAtencionActionsTypes.LIVE_CREATED).pipe(
    map((ambito: AmbitoAtencion) => new CreateSuccess(ambito))
  );

  @Effect()
  liveUpdate$: Observable<Action> = this.ambitoAtencionSocket.fromEvent(AmbitoAtencionActionsTypes.LIVE_UPDATED).pipe(
    map((ambito: AmbitoAtencion) => new PutSuccess({
      id: ambito.id, changes: ambito
    }))
  );

  @Effect()
  liveDestroy$: Observable<Action> = this.ambitoAtencionSocket.fromEvent(AmbitoAtencionActionsTypes.LIVE_DELETED).pipe(
    map(id => new DeleteSuccess(+id))
  );

  constructor(
    private actions$: Actions,
    private ambitoAtencionService: AmbitoAtencionService,
    private ambitoAtencionSocket: AmbitoAtencionSocketsService,
  ) { }
}
