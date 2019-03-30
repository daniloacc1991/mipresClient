import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  form: FormGroup;

  constructor(public formBuilder: FormBuilder) {
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
    // if (this.form.valid) {
      console.log(this.form);
    // }
  }

}
