import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Store, select } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import * as Auth from '../store/Actions/auth.actions';
import { UserCredentials } from '../models/user-credential';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

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

  public form: FormGroup;
  
  error$ = this.store.select(fromRoot.getAuthError);
  isLoading$ = this.store.select(fromRoot.getAuthLoading);
  auth$ = this.store.select(fromRoot.getAuthState);

  constructor(
    private store: Store<fromRoot.State>,
    private router: Router,
    private authService: AuthService,
    private formBuilder: FormBuilder,
  ) {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      usuario: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  login() {
    this.store.dispatch(new Auth.LoginUser({ user: this.user }));
  }

}
