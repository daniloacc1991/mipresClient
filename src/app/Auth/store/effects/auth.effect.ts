import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { map, startWith, switchMap, catchError, tap } from 'rxjs/operators';
import * as jwtDecode from 'jwt-decode';
import {
  AuthActionsType,
  LoginUser,
  LoginUserSuccess,
  LoginError,
  LogoutUser,
  LogoutUserSuccess,
} from '../actions/auth.actions';
import { AuthService } from '../../services/auth.service';
import { UserResponse } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class AuthEffects {

  @Effect()
  LoginUser$: Observable<Action> = this.actions$.pipe(
    ofType(AuthActionsType.LOGIN_USER),
    tap(v => console.log('Paso por el tap')),
    map((action: LoginUser) => action.payload),
    switchMap((auth) => this.authService.singIn(auth)),
    map((authSuccess: { token: string }) => {
      const tokenDecode: UserResponse = jwtDecode(authSuccess.token);
      tokenDecode.token = authSuccess.token;
      return new LoginUserSuccess(tokenDecode)
    }),
    catchError(err => of(new LoginError({ concern: 'Auth Login', error: err.message })))
  );

  @Effect()
  LogoutUser$: Observable<Action> = this.actions$.pipe(
    ofType(AuthActionsType.LOGOUT_USER),
    startWith(() => new LogoutUser()),
    switchMap(() => of({ username: 'GUEST', token: null })),
    map((logoutSuccess) => new LogoutUserSuccess(logoutSuccess)),
    catchError(err => {
      return of(new LoginError({ concern: 'Logout', error: err.message }))
    })
  );

  @Effect()
  LoginError$: Observable<Action> = this.actions$.pipe(
    ofType(AuthActionsType.LOGIN_ERROR),
    map(payload => {
      return { type: 'LOGIN_API_ERROR' };
    }),
  );


  constructor(
    private actions$: Actions,
    private authService: AuthService,
  ) { }
}
