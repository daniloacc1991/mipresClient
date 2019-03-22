import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { EstadoJunta } from '@app-models/index';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-estado-junta-form',
  templateUrl: './estado-junta-form.component.html',
  styleUrls: ['./estado-junta-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EstadoJuntaFormComponent implements OnInit {

  @Input() estadoJunta: EstadoJunta = {
    id: undefined,
    descripcion: '',
  };

  @Output() save = new EventEmitter<EstadoJunta>();

  form: FormGroup;

  constructor(public formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      'id': [this.estadoJunta.id],
      'descripcion': [this.estadoJunta.descripcion, Validators.required],
    });
  }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.estadoJunta) {
      this.form.patchValue({ ...this.estadoJunta });
    }
  }

  submit() {
    if (this.form.valid) {
      this.save.emit(this.form.value);
    }

  }

}
