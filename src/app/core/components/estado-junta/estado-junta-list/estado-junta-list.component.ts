import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { EstadoJunta } from '@app-models/index';

@Component({
  selector: 'app-estado-junta-list',
  templateUrl: './estado-junta-list.component.html',
  styleUrls: ['./estado-junta-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EstadoJuntaListComponent implements OnInit {

  @Input() estadosJunta: EstadoJunta[];
  @Output() edit = new EventEmitter<EstadoJunta>();
  @Output() show = new EventEmitter<EstadoJunta>();
  @Output() remove = new EventEmitter<EstadoJunta>();

  page = 1;
  pageSize = 10;

  constructor() { }

  ngOnInit() {
  }

  showDetails(estadoJunta: EstadoJunta) {
    this.show.emit(estadoJunta);
  }

  editEstadoJunta(estadoJunta: EstadoJunta) {
    this.edit.emit(estadoJunta);
  }

  deleteEstadoJunta(estadoJunta: EstadoJunta) {
    this.remove.emit(estadoJunta);
  }

}
