import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { startWith, switchMap, map, catchError } from 'rxjs/operators';
import { CausaNoEntregaService } from '../../services/causa-no-entrega.service';
import { CausaNoEntregaSocketService } from '../../services/causa-no-entrega-socket.service';
import {
  CAUSA_NO_ENTREGA_ACTIONS_TYPES,
  Failure,
  LoadAll,
  LoadAllSuccess,
  Load,
  LoadSuccess,
  Create,
  CreateSuccess,
  Put,
  PutSuccess,
  Delete,
  DeleteSuccess
} from '../actions/causa-no-entrega.actions';
import { CausaNoEntrega } from '@app-models/index';

@Injectable()
export class CausaNoEntregaEffects {

  @Effect()
  LoadAll$: Observable<Action> = this.actions$.pipe(
    ofType(CAUSA_NO_ENTREGA_ACTIONS_TYPES.LOAD_ALL),
    startWith(new LoadAll()),
    switchMap(() => this.causaNoEntregaService.index().pipe(
      map((causas: CausaNoEntrega[]) => new LoadAllSuccess(causas)),
      catchError(err => {
        console.error(err);
        alert(err)
        return of(new Failure({ concern: 'LOAD', error: err.error }));
      })
    )),
  );

  @Effect()
  Load$: Observable<Action> = this.actions$.pipe(
    ofType(CAUSA_NO_ENTREGA_ACTIONS_TYPES.LOAD),
    map((action: Load) => action.payload),
    switchMap((id: number) => this.causaNoEntregaService.show(id).pipe(
      map((causa: CausaNoEntrega) => new LoadSuccess(causa)),
      catchError(err => {
        alert(err);
        return of(new Failure({ concern: 'LOAD', error: err.error }));
      })
    )),
  );

  @Effect()
  Create$: Observable<Action> = this.actions$.pipe(
    ofType(CAUSA_NO_ENTREGA_ACTIONS_TYPES.CREATE),
    map((action: Create) => action.payload),
    switchMap((causaCreated: CausaNoEntrega) => this.causaNoEntregaService.create(causaCreated).pipe(
      map((causa: CausaNoEntrega) => new CreateSuccess(causa)),
      catchError(err => {
        alert(err);
        return of(new Failure({ concern: 'CREATE', error: err.error }));
      })
    ))
  );

  @Effect()
  Update$: Observable<Action> = this.actions$.pipe(
    ofType(CAUSA_NO_ENTREGA_ACTIONS_TYPES.PUT),
    map((action: Put) => action.payload),
    switchMap((causaUpdated: CausaNoEntrega) => this.causaNoEntregaService.update(causaUpdated).pipe(
      map((causa: CausaNoEntrega) => new PutSuccess({ id: causa.id, changes: causa })),
      catchError(err => {
        alert(err);
        return of(new Failure({ concern: 'PUT', error: err.error }));
      })
    ))
  );

  @Effect()
  Destroy$: Observable<Action> = this.actions$.pipe(
    ofType(CAUSA_NO_ENTREGA_ACTIONS_TYPES.DELETE),
    map((action: Delete) => action.payload),
    switchMap((id: number) => this.causaNoEntregaService.destroy(id).pipe(
      map((idDeleted: number) => new DeleteSuccess(idDeleted)),
      catchError(err => {
        alert(err);
        return of(new Failure({ concern: 'DELETE', error: err.error }));
      })
    ))
  );

  //Sockets Events
  @Effect()
  LiveCreate$: Observable<Action> = this.causaNoEntregaSocketService.fromEvent(CAUSA_NO_ENTREGA_ACTIONS_TYPES.LIVE_CREATED).pipe(
    map((causa: CausaNoEntrega) => new CreateSuccess(causa))
  );

  @Effect()
  LiveUpdate$: Observable<Action> = this.causaNoEntregaSocketService.fromEvent(CAUSA_NO_ENTREGA_ACTIONS_TYPES.LIVE_UPDATED).pipe(
    map((causa: CausaNoEntrega) => new PutSuccess({ id: causa.id, changes: causa }))
  );

  @Effect()
  LiveDelete$: Observable<Action> = this.causaNoEntregaSocketService.fromEvent(CAUSA_NO_ENTREGA_ACTIONS_TYPES.LIVE_DELETED).pipe(
    map((id: number) => new DeleteSuccess(id))
  );

  constructor(
    private actions$: Actions,
    private causaNoEntregaService: CausaNoEntregaService,
    private causaNoEntregaSocketService: CausaNoEntregaSocketService,
  ) { }

}
