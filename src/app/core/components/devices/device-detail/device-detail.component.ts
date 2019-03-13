import { Component, OnInit, Input, ChangeDetectionStrategy, OnChanges } from '@angular/core';
import { Device } from '@app-models/index';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-device-detail',
  templateUrl: './device-detail.component.html',
  styleUrls: ['./device-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeviceDetailComponent implements OnInit, OnChanges {

  @Input() devices: Device[];
  frecuenciaUso$: Observable<string>;

  tipoPrestacion = [{ id: 1, descripcion: 'Única' }, { id: 2, descripcion: 'Sucesiva' }];
  frecuenciasAdministracion = [
    { id: 1, descripcion: 'Minuto(s)' },
    { id: 2, descripcion: 'Hora(s)' },
    { id: 3, descripcion: 'Día(s)' },
    { id: 4, descripcion: 'Semana(s)' },
    { id: 5, descripcion: 'Mes(es)' },
    { id: 6, descripcion: 'Año' },
    { id: 7, descripcion: 'Según respuesta al tratamiento' },
    { id: 8, descripcion: 'Única' }
  ];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
  }

}
