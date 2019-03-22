import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import {
  EstadoJuntaActionsTypes,
  LoadAll,
  LoadAllSuccess,
  Load,
  LoadSuccess,
  Create,
  CreateSuccess,
  Put,
  PutSuccess,
  DeleteSuccess,
  Delete,
  Failure,
} from '../actions/estado-junta.actions';
import { EstadoJuntaService } from '../../services/estado-junta.service';
import { EstadoJuntaSocketService } from '../../services/estado-junta-socket.service';
import { EstadoJunta } from '@app-models/index';

@Injectable()
export class EstadoJuntaEffects {

  @Effect()
  loadAll$: Observable<Action> = this.actions$.pipe(
    ofType(EstadoJuntaActionsTypes.LOAD_ALL),
    startWith(new LoadAll()),
    switchMap(() => this.estadoJuntaService.index()),
    map((estadoJunta: EstadoJunta[]) => new LoadAllSuccess(estadoJunta)),
  );

  @Effect()
  load$: Observable<Action> = this.actions$.pipe(
    ofType(EstadoJuntaActionsTypes.LOAD),
    map((action: Load) => action.payload),
    switchMap((id) => this.estadoJuntaService.show(id)),
    map((estadoJunta: EstadoJunta) => new LoadSuccess(estadoJunta)),
  );

  @Effect()
  create$: Observable<Action> = this.actions$.pipe(
    ofType(EstadoJuntaActionsTypes.CREATE),
    map((action: Create) => action.payload),
    switchMap((estadoJunta) => this.estadoJuntaService.create(estadoJunta)),
    map((createEstadoJunta: EstadoJunta) => new CreateSuccess(createEstadoJunta)),
    catchError(err => {
      alert(err['message']);
      return of(new Failure({ concern: 'CREATE', error: err }))
    }),
  );

  @Effect()
  update$: Observable<Action> = this.actions$.pipe(
    ofType(EstadoJuntaActionsTypes.PUT),
    map((action: Put) => action.payload),
    switchMap((estadoJunta) => this.estadoJuntaService.update(estadoJunta)),
    map((updateEstadoJunta: EstadoJunta) => new PutSuccess({
      id: updateEstadoJunta.id,
      changes: updateEstadoJunta,
    })),
    catchError(err => {
      alert(err['message']);
      return of(new Failure({ concern: 'PUT', error: err }))
    }),
  );

  @Effect()
  destroy$: Observable<Action> = this.actions$.pipe(
    ofType(EstadoJuntaActionsTypes.DELETE),
    map((action: Delete) => action.payload),
    switchMap(
      (id: number) => this.estadoJuntaService.destroy(id).pipe(
        map(() => new DeleteSuccess(id))
      )
    )
  );

  // Socket Live Events
  @Effect()
  liveCreate$: Observable<Action> = this.estadoJuntaServiceSocket.fromEvent(EstadoJuntaActionsTypes.LIVE_CREATED).pipe(
    map((estadoJunta: EstadoJunta) => new CreateSuccess(estadoJunta))
  );

  @Effect()
  liveUpdate$: Observable<Action> = this.estadoJuntaServiceSocket.fromEvent(EstadoJuntaActionsTypes.LIVE_UPDATED).pipe(
    map((estadoJunta: EstadoJunta) => new PutSuccess({
      id: estadoJunta.id, changes: estadoJunta
    }))
  );

  @Effect()
  liveDestroy$: Observable<Action> = this.estadoJuntaServiceSocket.fromEvent(EstadoJuntaActionsTypes.LIVE_DELETED).pipe(
    map(id => new DeleteSuccess(+id))
  );

  constructor(
    private actions$: Actions,
    private estadoJuntaService: EstadoJuntaService,
    private estadoJuntaServiceSocket: EstadoJuntaSocketService,
  ) { }
}