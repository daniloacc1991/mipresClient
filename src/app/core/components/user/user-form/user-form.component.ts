import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { User } from '@app-models/index';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserFormComponent implements OnInit {

  @Input() user: User = {
    id: undefined,
    name: '',
    email: '',
    password: '',
    rol: '',
    usuario: '',
  };

  @Output() save = new EventEmitter<User>();

  form: FormGroup;

  constructor(public formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      'id': [this.user.id],
      'name': [this.user.name, Validators.required],
      'email': [
        this.user.email, [
          Validators.required,
          Validators.email,
        ]
      ],
      'password': [
        this.user.password, [
          Validators.required,
          Validators.minLength(8),
        ]
      ],
      'rol': [this.user.rol, Validators.required],
      'usuario': [
        this.user.usuario, [
          Validators.required,
          Validators.minLength(6),
        ]
      ]
    });
  }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.user) {
      this.form.patchValue({ ...this.user });
    }
  }

  submit() {
    if (this.form.valid) {
      this.save.emit(this.form.value);
    }
  }
}
