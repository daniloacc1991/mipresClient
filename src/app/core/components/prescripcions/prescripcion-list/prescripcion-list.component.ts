import { Component, OnInit, EventEmitter, ChangeDetectionStrategy, Input, Output } from '@angular/core';
import { Prescripcion } from '@app-models/index';


@Component({
  selector: 'app-prescripcion-list',
  templateUrl: './prescripcion-list.component.html',
  styleUrls: ['./prescripcion-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrescripcionListComponent implements OnInit {

  @Input() prescripcions: Prescripcion[];
  @Output() edit = new EventEmitter<Prescripcion>();
  @Output() show = new EventEmitter<Prescripcion>();
  @Output() remove = new EventEmitter<Prescripcion>();

  page = 1;
  pageSize = 10;

  constructor() { }

  ngOnInit() {
  }

  showDetails(prescripcion: Prescripcion) {
    this.show.emit(prescripcion);
  }

  editPrescripcion(prescripcion: Prescripcion) {
    this.edit.emit(prescripcion);
  }

  deletePrescripcion(prescripcion: Prescripcion) {
    this.remove.emit(prescripcion);
  }
}
