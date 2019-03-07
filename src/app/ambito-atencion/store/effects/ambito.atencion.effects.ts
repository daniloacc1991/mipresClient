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
  Load
} from '../actions/ambito-atencion.actions';
import { AmbitoAtencion } from '../../models/ambito-atencion';

@Injectable({
  providedIn: 'root'
})
export class AmbitoAtencionEffects {

  @Effect()
  LoadAll$: Observable<Action> = this.actions$.pipe(
    ofType(AmbitoAtencionActionsTypes.LOAD_ALL),
    startWith(new LoadAll()),
    switchMap(() => {
      return this.ambitoAtencionService.findAll();
    }),
    map((ambitos: AmbitoAtencion[]) => new LoadAllSuccess(ambitos)),
  );

  // @Effect()
  // Load$: Observable<Action> = this.actions$.pipe(
  //   ofType(AmbitoAtencionActionsTypes.LOAD),
  //   map((action: Load) => action.payload),
  //   switchMap((id) => )
  // );

  constructor(
    private actions$: Actions,
    private ambitoAtencionService: AmbitoAtencionService,
  ) { }
}
