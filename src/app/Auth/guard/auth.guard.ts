import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs';
import * as fromRoot from '../../reducers'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  public isLogin$: Observable<boolean> = this.store.select(fromRoot.getAuthLoging);

  constructor(
    public router: Router,
    private store: Store<fromRoot.State>,
  ) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot)
    : Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.isLogin$.subscribe(
      res => {
        if (!res) {
          this.router.navigate(['/login']);
        }
      }
    );
    return this.isLogin$;
  }
}
