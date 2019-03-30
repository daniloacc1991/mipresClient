import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { map, startWith, switchMap, catchError } from 'rxjs/operators';
import * as jwtDecode from 'jwt-decode';
import {
  AuthActionsType,
  LoginUser,
  LoginUserSuccess,
  LoginError,
  LogoutUser,
  LogoutUserSuccess,
  ChangePassword,
  ChangePasswordSuccess,
} from '../actions/auth.actions';
import { AuthService } from '../../services/auth.service';
import { UserResponse } from '../../models';
import { UserService } from '@app-user/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthEffects {

  @Effect()
  LoginUser$: Observable<Action> = this.actions$.pipe(
    ofType(AuthActionsType.LOGIN_USER),
    map((action: LoginUser) => action.payload),
    switchMap((auth) => this.authService.singIn(auth).pipe(
      map((authSuccess: { token: string }) => {
        const tokenDecode: UserResponse = jwtDecode(authSuccess.token);
        tokenDecode.token = authSuccess.token;
        return new LoginUserSuccess(tokenDecode)
      }),
      catchError(err => of(new LoginError({ concern: 'LOGIN', error: err.error.error }))),
    ))
  );

  @Effect()
  LogoutUser$: Observable<Action> = this.actions$.pipe(
    ofType(AuthActionsType.LOGOUT_USER),
    startWith(() => new LogoutUser()),
    switchMap(() => of({ username: 'GUEST', token: null })),
    map((logoutSuccess) => new LogoutUserSuccess(logoutSuccess)),
    catchError(err => of(new LoginError({ concern: 'LOGOUT', error: err.error }))),
  );

  @Effect()
  ChangePassword$: Observable<Action> = this.actions$.pipe(
    ofType(AuthActionsType.CHANGE_PASSWORD),
    map((action: ChangePassword) => action.payload),
    switchMap((newPassword) => this.authService.changedPassword(newPassword)),
    map((message) => new ChangePasswordSuccess()),
    catchError(err => of(new LoginError({ concern: 'PASSWORD', error: err.error }))),
  );

  @Effect()
  LoginError$: Observable<Action> = this.actions$.pipe(
    ofType(AuthActionsType.LOGIN_ERROR),
    map((action: LoginError) => {
      return { type: 'LOGIN_API_ERROR', payload: action.payload };
    }),
  );


  constructor(
    private actions$: Actions,
    private authService: AuthService,
  ) { }
}
