import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class Authorization implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');
    if (token) {
      const duplicate = req.clone(
        {
          headers: req.headers.set('Authorization', `Bearer ${token}`),
        }
      );

      return next.handle(duplicate);
    } else {
      return next.handle(req);
    }
  }
}
