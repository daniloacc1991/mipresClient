import { Component, OnInit, Input } from '@angular/core';
import { ServicioComplementario } from '@app-models/index';

@Component({
  selector: 'app-servicio-complementario-detalle',
  templateUrl: './servicio-complementario-detalle.component.html',
  styleUrls: ['./servicio-complementario-detalle.component.scss']
})
export class ServicioComplementarioDetalleComponent implements OnInit {

  @Input() services: ServicioComplementario;
  tipoPrestacion = [{ id: 1, descripcion: 'Única' }, { id: 2, descripcion: 'Sucesiva' }];
  
  constructor() { }

  ngOnInit() {
  }

}
