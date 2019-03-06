import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import * as Auth from '../store/Actions/auth.actions';
import { UserCredentials } from '../models/user-credential';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: UserCredentials = {
    usuario: '1098707786',
    password: '12345678',
  };

  error$ = this.store.select(fromRoot.getAuthError);
  isLoading$ = this.store.select(fromRoot.getAuthLoading);
  auth$ = this.store.select(fromRoot.getAuthState);

  constructor(
    private store: Store<fromRoot.State>,
  ) { }

  ngOnInit() {
  }

  login() {
    // this.store.dispatch(new Auth.LoginUser({ user: this.user }));
    this.store.dispatch(new Auth.LoginUser({user: this.user}));
  }

}
