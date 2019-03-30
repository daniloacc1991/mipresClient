import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  LogoutUser
} from '../../store/actions/auth.actions';
import * as fromRoot from '../../../reducers';

@Component({
  selector: 'app-logout',
  template: '<p>logout works!</p>',
})
export class LogoutComponent implements OnInit {

  constructor(
    private store: Store<fromRoot.State>
  ) { }

  ngOnInit() {
    this.store.dispatch(new LogoutUser());
  }

}
