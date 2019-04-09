import { Component, OnInit, Input, ChangeDetectionStrategy, OnChanges, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Entrega, PrescripcionDetalle, CausaNoEntrega } from '@app-models/index';

@Component({
  selector: 'app-entrega-form',
  templateUrl: './entrega-form.component.html',
  styleUrls: ['./entrega-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EntregaFormComponent implements OnInit, OnChanges {

  @Input() prescripcionDetalle: PrescripcionDetalle;
  @Input() causasNoEntrega: CausaNoEntrega[]; 
  @Output() save = new EventEmitter<Entrega>();

  form: FormGroup;

  constructor(public formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      NoPrescripcion: [{
        value: '',
        disabled: true,
      }, Validators.required],
      TipoTec: [{
        value: '',
        disabled: true,
      }, Validators.required],
      ConTec: [{
        value: null,
        disabled: true,
      }, Validators.required],
      TipoIDPaciente: [{
        value: '',
        disabled: true,
      }, Validators.required],
      NoIDPaciente: [{
        value: '',
        disabled: true,
      }, Validators.required],
      NoEntrega: [null, Validators.required],
      CodSerTecEntregado: ['', Validators.required],
      CantTotEntregada: ['', Validators.required],
      EntTotal: [null, Validators.required],
      CausaNoEntrega: [null],
      FecEntrega: ['', Validators.required],
      NoLote: [''],
      prescripcionDetalleId: [null, Validators.required]
    });
  }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.prescripcionDetalle) {
      this.form.patchValue({
        NoPrescripcion: this.prescripcionDetalle.prescripcion.NoPrescripcion,
        ConTec: this.prescripcionDetalle.ConOrden,
        TipoIDPaciente: this.prescripcionDetalle.prescripcion.TipoIDPaciente,
        NoIDPaciente: this.prescripcionDetalle.prescripcion.NroIDPaciente,
        TipoTec: this.prescripcionDetalle.TipoTecnologia,
        prescripcionDetalleId: this.prescripcionDetalle.id
      });
    }
  }

  submit() {
    if (this.form.valid) {
      this.save.emit(this.form.value);
    }
  }

}
