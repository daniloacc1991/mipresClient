import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { EstadoJunta } from '@app-models/index';

@Component({
  selector: 'app-estado-junta-detalle',
  templateUrl: './estado-junta-detalle.component.html',
  styleUrls: ['./estado-junta-detalle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EstadoJuntaDetalleComponent implements OnInit {

  @Input() estadoJunta: EstadoJunta;
  @Output() edit = new EventEmitter<EstadoJunta>();
  @Output() remove = new EventEmitter<EstadoJunta>();

  constructor() { }

  ngOnInit() {
  }

}
