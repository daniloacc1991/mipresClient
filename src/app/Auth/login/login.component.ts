import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Store, ActionsSubject } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import {
  AuthActionsType,
  LoginUser
} from '../store/actions/auth.actions';
import { AuthService } from '../services/auth.service';
import * as fromRoot from '../../reducers';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  loginSuccessSub: Subscription;

  public form: FormGroup;

  error$ = this.store.select(fromRoot.getAuthError);
  isLoading$ = this.store.select(fromRoot.getAuthLoading);
  isLoging$ = this.store.select(fromRoot.getAuthLoging);

  constructor(
    private store: Store<fromRoot.State>,
    private redirectLogin: ActionsSubject,
    private router: Router,
    private authService: AuthService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      usuario: ["", Validators.required],
      password: ["", Validators.required]
    });

    this.loginSuccessSub = this.redirectLogin.pipe(
      filter( action => action.type === AuthActionsType.LOGIN_USER_SUCCESS)
    )
      .subscribe(_ => this.router.navigate(['/']));

    this.isLoging$.subscribe(
      res => {
        if (res) {
          this.router.navigate(['/']);
        }
      }
    );
  }

  login() {
    this.store.dispatch(new LoginUser(this.form.value));
  }

  home() {
    this.router.navigate(['/']);
  }

  ngOnDestroy() {
    this.loginSuccessSub.unsubscribe();
  }
}
