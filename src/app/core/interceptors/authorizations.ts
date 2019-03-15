import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface AuthState {
  username: string,
  token: string,
  isLoading: false,
  isLogin: false,
  error: string,
}

@Injectable()
export class Authorization implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authState: AuthState = JSON.parse(localStorage.getItem('auth'));
    console.log('DESDE INTERCEPTOR', authState);
    if (authState.token !== null) {
      const duplicate = req.clone(
        {
          headers: req.headers.set('Authorization', `Bearer ${authState.token}`),
        }
      );

      return next.handle(duplicate);
    } else {
      return next.handle(req);
    }
  }
}
