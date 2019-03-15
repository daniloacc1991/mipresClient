import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs';
import * as fromRoot from '../../reducers'
// import * as fromAuth from '../store/selectors/auth.selectors';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  public isLogin$: Observable<boolean> = this.store.select(fromRoot.getAuthLoging);

  constructor(
    public router: Router,
    private authService: AuthService,
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
