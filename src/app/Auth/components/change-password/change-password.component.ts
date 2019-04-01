import { Component, OnInit, OnChanges, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Store, ActionsSubject } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import {
  AuthActionsType,
  ChangePassword,
} from '../../store/actions/auth.actions';
import * as fromRoot from '../../../reducers';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChangePasswordComponent implements OnInit, OnChanges, OnDestroy {

  form: FormGroup;
  subRedirect: Subscription;

  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
    private store: Store<fromRoot.State>,
    private actionsSubject: ActionsSubject,
  ) {
    this.form = this.formBuilder.group({
      'password': [, [
        Validators.required,
        Validators.minLength(8),
      ]],
      'passwordRepeat': [''],
    });

    this.form.controls['passwordRepeat'].setValidators([
      Validators.required,
      this.noIquals.bind(this.form),
    ])
  }

  ngOnInit() {
    this.subRedirect = this.actionsSubject.pipe(
      filter((action) => action.type === AuthActionsType.CHANGE_PASSWORD_SUCCESS)
    )
      .subscribe(_ => {
        this.router.navigate(['/']);
      });
  }

  noIquals(control: FormControl): any {
    let form: any = this;
    if (control.value !== form.controls['password'].value) {
      return {
        noiguales: true
      }
    }
    return null;
  }

  submit() {
    if (this.form.valid) {
      this.store.dispatch(new ChangePassword(this.form.value.password));
    }
  }

  ngOnChanges() {
  }

  ngOnDestroy() {
    this.subRedirect.unsubscribe();
  }

}
