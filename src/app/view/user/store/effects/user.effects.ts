import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { map, startWith, switchMap, catchError } from 'rxjs/operators';
import {
  UserActionsTypes,
  Load,
  LoadSuccess,
  LoadAll,
  LoadAllSuccess,
  Create,
  CreateSuccess,
  Put,
  PutSuccess,
  Delete,
  DeleteSuccess,
  Failure
} from '../actions/user.actions';
import { UserService } from '@app-user/services/user.service';
import { UserSocketService } from '@app-user/services/user-socket.service';
import { User } from '@app-models/index';

@Injectable()
export class UserEffects {

  @Effect()
  loadAll$: Observable<Action> = this.actions$.pipe(
    ofType(UserActionsTypes.LOAD_ALL),
    startWith(() => new LoadAll()),
    switchMap(() => this.userService.index().pipe(
      map((users: User[]) => new LoadAllSuccess(users)),
      catchError(err => of(new Failure({ concern: 'LOAD', error: err.error.error })))
    )),
  );

  @Effect()
  load$: Observable<Action> = this.actions$.pipe(
    ofType(UserActionsTypes.LOAD),
    map((action: Load) => action.payload),
    switchMap((id: number) => this.userService.show(id)),
    map((userLoad: User) => new LoadSuccess(userLoad)),
    catchError(err => of(new Failure({ concern: 'LOAD', error: err.error.error })))
  );

  @Effect()
  create$: Observable<Action> = this.actions$.pipe(
    ofType(UserActionsTypes.CREATE),
    map((action: Create) => action.payload),
    switchMap((user) => this.userService.create(user)),
    map((userCreated: User) => new CreateSuccess(userCreated)),
    catchError(err => of(new Failure({ concern: 'CREATE', error: err.error.error })))
  );

  @Effect()
  update$: Observable<Action> = this.actions$.pipe(
    ofType(UserActionsTypes.PUT),
    map((action: Put) => action.payload),
    switchMap((user) => this.userService.update(user)),
    map((userUpdated: User) => new PutSuccess({
      id: userUpdated.id,
      changes: userUpdated,
    })),
    catchError(err => of(new Failure({ concern: 'PUT', error: err.error.error })))
  );

  @Effect()
  delete$: Observable<Action> = this.actions$.pipe(
    ofType(UserActionsTypes.DELETE),
    map((action: Delete) => action.payload),
    switchMap((id: number) => this.userService.destroy(id).pipe(
      map(() => new DeleteSuccess(id)),
      catchError(err => of(new Failure({ concern: 'DELETE', error: err })))
    )),
  );

  // Socket Live Events
  @Effect()
  liveCreate$: Observable<Action> = this.userSocketService.fromEvent(UserActionsTypes.LIVE_CREATED).pipe(
    map((user: User) => new CreateSuccess(user))
  );

  @Effect()
  liveUpdate$: Observable<Action> = this.userSocketService.fromEvent(UserActionsTypes.LIVE_UPDATED).pipe(
    map((user: User) => {
      console.log('Event', 'Paso por el effect LiveEvent')
      return new PutSuccess({
        id: user.id,
        changes: user
      })
    })
  );

  @Effect()
  liveDestroy$: Observable<Action> = this.userSocketService.fromEvent(UserActionsTypes.LIVE_DELETED).pipe(
    map(id => new DeleteSuccess(+id))
  );

  constructor(
    private actions$: Actions,
    private userService: UserService,
    private userSocketService: UserSocketService
  ) { }
}