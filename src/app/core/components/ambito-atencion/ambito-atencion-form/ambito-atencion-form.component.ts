import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AmbitoAtencion } from '@app-models/index';

@Component({
  selector: 'app-ambito-atencion-form',
  templateUrl: './ambito-atencion-form.component.html',
  styleUrls: ['./ambito-atencion-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AmbitoAtencionFormComponent implements OnInit, OnChanges {

  @Input() ambito: AmbitoAtencion = {
    id: undefined,
    descripcion: '',
  };

  @Output() save = new EventEmitter<AmbitoAtencion>();

  form: FormGroup;

  constructor(public formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      'id': [this.ambito.id],
      'descripcion': [this.ambito.descripcion, Validators.required],
    });
  }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.ambito) {
      this.form.patchValue({ ...this.ambito });
    }
  }

  submit() {
    if (this.form.valid) {
      this.save.emit(this.form.value);
    }

  }

}
