import { Component, OnInit, ChangeDetectionStrategy, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CausaNoEntrega } from '@app-models/index';

@Component({
  selector: 'app-causa-no-entrega-form',
  templateUrl: './causa-no-entrega-form.component.html',
  styleUrls: ['./causa-no-entrega-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CausaNoEntregaFormComponent implements OnInit, OnChanges {

  @Input() causaNoEntrega: CausaNoEntrega;
  @Input() isLoading: Boolean;
  @Output() save = new EventEmitter<CausaNoEntrega>();

  height= '5rem';
  form: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
  ) {
    this.form = this.formBuilder.group({
      id: [undefined, Validators.required],
      descripcion: ['', Validators.required],
      aplicaPara: [undefined, [
        Validators.required,
        Validators.min(0),
        Validators.max(1),
      ]],
      tipoTecnologia: this.formBuilder.group({
        medicamento: [false, Validators.required],
        procedimiento: [false, Validators.required],
        dispositivoMedico: [false, Validators.required],
        soporteNutricional: [false, Validators.required],
        servicioComplementario: [false, Validators.required],
      })
    });
  }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.causaNoEntrega) {
      this.form.patchValue({
        ...this.causaNoEntrega,
      })
    }
  }

  submit() {
    if (this.form.valid) {
      this.save.emit(this.form.value);
    }
  }
}
