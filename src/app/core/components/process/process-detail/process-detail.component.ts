import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Procedure } from '@app-models/index';

@Component({
  selector: 'app-process-detail',
  templateUrl: './process-detail.component.html',
  styleUrls: ['./process-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProcessDetailComponent implements OnInit {

  @Input() procedures: Procedure[];

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

}
