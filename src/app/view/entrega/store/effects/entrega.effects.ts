import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { EntregaService } from '../../services/entrega.service';
import {
  EntregaActionsTypes,
  LoadAll,
  LoadAllSuccess,
  Load,
  Create,
  CreateSuccess,
  Failure,
  Put,
  PutSuccess,
  DeleteSuccess,
  Delete,
  LoadDetail,
  LoadDetailSuccess
} from '../actions/entrega.actions';
import { Entrega, PrescripcionDetalle } from '@app-models/index';
import { EntregaGatewayService } from '../../services/entrega-gateway.service';

@Injectable({
  providedIn: 'root'
})
export class EntregaEffects {

  @Effect()
  loadAll$: Observable<Action> = this.actions$.pipe(
    ofType(EntregaActionsTypes.LOAD_ALL),
    startWith(new LoadAll()),
    switchMap(() => this.entregaService.findAll()),
    map((entregas: Entrega[]) => new LoadAllSuccess(entregas)),
  );

  @Effect()
  load$: Observable<Action> = this.actions$.pipe(
    ofType(EntregaActionsTypes.LOAD),
    map((action: Load) => action.payload),
    switchMap((id) => this.entregaService.show(id)),
    map((entrega: Entrega) => new LoadAll(entrega)),
  );

  @Effect()
  create$: Observable<Action> = this.actions$.pipe(
    ofType(EntregaActionsTypes.CREATE),
    map((action: Create) => action.payload),
    switchMap((entrega) => this.entregaService.create(entrega).pipe(
      map((createdEntrega: Entrega) => new CreateSuccess(createdEntrega)),
      catchError(err => {
        alert(err['message']);
        return of(new Failure({ concern: 'CREATE', error: err }));
      }),
    )),
  );

  @Effect()
  update$: Observable<Action> = this.actions$.pipe(
    ofType(EntregaActionsTypes.PUT),
    map((action: Put) => action.payload),
    switchMap((entrega: Entrega) => this.entregaService.update(entrega).pipe(
      map((updatedentrega: Entrega) => new PutSuccess({
        id: updatedentrega.id,
        changes: updatedentrega
      })
      ),
      catchError(err => {
        alert(err['message']);
        return of(new Failure({ concern: 'PUT', error: err }))
      })
    )),
  );

  @Effect()
  loadDetail$: Observable<Action> = this.actions$.pipe(
    ofType(EntregaActionsTypes.LOAD_DETAIL),
    map((action: LoadDetail) => action.payload),
    switchMap((id: number) => this.entregaService.loadPrescripcionDetalle(id).pipe(
      map((prescripcionDetalle: PrescripcionDetalle) => new LoadDetailSuccess(prescripcionDetalle)),
      catchError(err => {
        alert(err['message']);
        return of(new Failure({ concern: 'LOAD_DETAIL', error: err }))
      })
    )),
  );

  @Effect()
  destroy$: Observable<Action> = this.actions$.pipe(
    ofType(EntregaActionsTypes.DELETE),
    map((action: Delete) => action.payload),
    switchMap(
      (id: number) => this.entregaService.destroy(id).pipe(
        map(() => new DeleteSuccess(id))
      )
    )
  );

  // Socket Live Events
  @Effect()
  liveCreate$: Observable<Action> = this.entregaSocket.fromEvent(EntregaActionsTypes.LIVE_CREATED).pipe(
    map((entrega: Entrega) => new CreateSuccess(entrega))
  );

  @Effect()
  liveUpdate$: Observable<Action> = this.entregaSocket.fromEvent(EntregaActionsTypes.LIVE_UPDATED).pipe(
    map((entrega: Entrega) => new PutSuccess({
      id: entrega.id, changes: entrega
    }))
  );

  @Effect()
  liveDestroy$: Observable<Action> = this.entregaSocket.fromEvent(EntregaActionsTypes.LIVE_DELETED).pipe(
    map(id => new DeleteSuccess(+id))
  );

  constructor(
    private actions$: Actions,
    private entregaService: EntregaService,
    private entregaSocket: EntregaGatewayService,
  ) { }
}
