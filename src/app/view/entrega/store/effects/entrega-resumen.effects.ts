import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { EntregaService } from '../../services/entrega.service';
import { EntregaResumen } from '@app-models/index';
import {
  EntregaResumenActionsTypes,
  LoadAll,
  LoadAllSuccess,
  Failure
} from '../actions/entrega-resumen.actions';
import { Observable, of } from 'rxjs';
import { startWith, switchMap, map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EntregaResumenEffects {

  @Effect()
  loadAll$: Observable<Action> = this.actions$.pipe(
    ofType(EntregaResumenActionsTypes.LOAD_ALL),
    startWith(new LoadAll()),
    switchMap(() => this.entregaService.loadAllResumen().pipe(
      map((entregaResumen: EntregaResumen[]) => new LoadAllSuccess(entregaResumen)),
      catchError(err => {
        console.error(err);
        return of(new Failure({ concern: 'LOADALL', error: err }));
      })
    )),
  );


  constructor(
    private actions$: Actions,
    private entregaService: EntregaService,
    // private entregaSocket: EntregaGatewayService,
  ) { }
}
