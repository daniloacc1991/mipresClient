import { Component, OnInit, Input, ChangeDetectionStrategy, OnChanges, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Entrega, PrescripcionDetalle } from '@app-models/index';

@Component({
  selector: 'app-entrega-form',
  templateUrl: './entrega-form.component.html',
  styleUrls: ['./entrega-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EntregaFormComponent implements OnInit, OnChanges {

  @Input() prescripcionDetalle: PrescripcionDetalle;
  @Output() save = new EventEmitter<Entrega>();

  form: FormGroup;

  constructor(public formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      NoPrescripcion: ['', Validators.required],
      TipoTec: ['', Validators.required],
      ConTec: [null, Validators.required],
      TipoIDPaciente: ['', Validators.required],
      NoIDPaciente: ['', Validators.required],
      NoEntrega: [null, Validators.required],
      CodSerTecEntregado: ['', Validators.required],
      CantTotEntregada: ['', Validators.required],
      EntTotal: [null, Validators.required],
      CausaNoEntrega: [null, Validators.required],
      FecEntrega: ['', Validators.required],
      NoLote: ['', Validators.required],
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
