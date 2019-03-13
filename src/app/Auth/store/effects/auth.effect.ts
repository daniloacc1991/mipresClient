import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
// import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { map, startWith, switchMap, catchError } from 'rxjs/operators';
import {
  AuthActionsType, LoginUser, LoginUserSuccess, LoginError, LogoutUser, LogoutUserSuccess,

} from '../Actions/auth.actions';
import { AuthService } from '../../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthEffects {

  @Effect()
  LoginUser$: Observable<Action> = this.actions$.pipe(
    ofType(AuthActionsType.LOGIN_USER),
    map((action: LoginUser) => action.payload),
    switchMap((auth) => this.authService.singIn(auth)),
    map((authSuccess: string) => {
      console.log(authSuccess)
      localStorage.setItem('token', authSuccess);
      return new LoginUserSuccess({ username: '', token: authSuccess })
    }),
    catchError(err => {
      alert(err.message);
      return of(new LoginError({ concern: 'Auth Login', error: err.message }))
    })
  );

  @Effect()
  LogoutUser$: Observable<Action> = this.actions$.pipe(
    ofType(AuthActionsType.LOGOUT_USER),
    startWith(() => new LogoutUser()),
    switchMap(() => of({ username: 'GUEST', token: null })),
    map((logoutSuccess) => new LogoutUserSuccess(logoutSuccess)),
    catchError(err => {
      alert(err.message);
      return of(new LoginError({ concern: 'Logout', error: err.message }))
    })
  );


  constructor(
    private actions$: Actions,
    private authService: AuthService,
  ) { }
}
