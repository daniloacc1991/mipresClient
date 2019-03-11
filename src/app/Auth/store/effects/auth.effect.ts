import { Injectable } from '@angular/core';
import { Action, State } from '@ngrx/store';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { exhaustMap, catchError, map, tap, mergeMap, startWith, switchMap } from 'rxjs/operators';
import {
  AuthActionType,
  LoggedUser,
  LoggerIn,
  LoginUser,
  LogoutAuth,
  LoginUserError
} from '../Actions/auth.actions';
import { AuthService } from '../../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthEffects {
  @Effect()
  LoginUserError$: Observable<Action> = this.actions$.pipe(
    ofType<LoginUserError>(AuthActionType.LOGIN_USER_ERROR),
    tap(v => console.log('LoggedAPI error', v.payload)),
    map(data => {
      console.log('Error', data);
      return { type: 'LOGIN_API_ERROR', payload: 'Email o password incorrect' };
    })
  );

  @Effect()
  LoginUser$: Observable<Action> = this.actions$.pipe(
    ofType<LoginUser>(AuthActionType.LOGIN_USER),
    tap(v => console.log('LoginUser Effect', v)),
    tap(() => new LoggerIn({ isLoading: true })),
    map(action => action.payload),
    exhaustMap(auth => {
      return this.authService.singIn(auth.user).pipe(
        map(response => new LoggedUser({ user: response })),
        catchError(err => of(new LoginUserError(err))
        )
      );
    }),
  );

  @Effect({ dispatch: false })
  LoggedUser$: Observable<Action> = this.actions$.pipe(
    ofType<LoggedUser>(AuthActionType.LOGGED_USER),
    tap((v: any) => {
      localStorage.setItem('token', v.payload.user);
      console.log('LoggedUser Effect', v);
      this.router.navigate(['/']);
    }),
  );

  constructor(
    private actions$: Actions,
    private router: Router,
    private authService: AuthService,
  ) { }
}
