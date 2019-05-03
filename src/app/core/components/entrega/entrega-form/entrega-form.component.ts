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
  @Input() isLoading: boolean;
  @Output() save = new EventEmitter<Entrega>();

  form: FormGroup;

  constructor(public formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      NoPrescripcion: [{
        value: '',
      }, Validators.required],
      TipoTec: [{
        value: '',
      }, Validators.required],
      ConTec: [{
        value: null,
      }, Validators.required],
      TipoIDPaciente: [{
        value: '',
      }, Validators.required],
      NoIDPaciente: [{
        value: '',
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
      const year = this.form.value.FecEntrega.year;
      const month = this.form.value.FecEntrega.month < 10 ? `0${this.form.value.FecEntrega.month}` : this.form.value.FecEntrega.month;
      const day = this.form.value.FecEntrega.day < 10 ? `0${this.form.value.FecEntrega.day}` : this.form.value.FecEntrega.day;
      const fecha = `${year}-${month}-${day}`;
      this.form.value.FecEntrega = fecha;
      this.save.emit(this.form.value);
    }
  }

}
