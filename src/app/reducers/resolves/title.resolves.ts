import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import * as fromRoot from '..';
import * as titleActions from '../actions/title.actions';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})

export class TitleResolver implements Resolve<string> {

  constructor(
    private store: Store<fromRoot.State>,
    private _title: Title
    ) { }

  resolve(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<string> {
    this.store.dispatch(new titleActions.SetCurrentTitle(route.data['title']));
    return of(route.data['title']);
  }
}