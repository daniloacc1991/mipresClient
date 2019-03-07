import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { AmbitoAtencion } from '@app-models/index';

@Component({
  selector: 'app-ambito-atencion-list',
  templateUrl: './ambito-atencion-list.component.html',
  styleUrls: ['./ambito-atencion-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AmbitoAtencionListComponent implements OnInit {

  @Input() ambitos: AmbitoAtencion[];
  @Output() edit = new EventEmitter<AmbitoAtencion>();
  @Output() show = new EventEmitter<AmbitoAtencion>();
  @Output() remove = new EventEmitter<AmbitoAtencion>();

  contactsTrackByFn = (index: number, ambito: AmbitoAtencion) => ambito.id;

  page = 1;
  pageSize = 10;

  constructor() { }

  ngOnInit() {
  }

  showDetails(ambito: AmbitoAtencion) {
    this.show.emit(ambito);
  }

  editAmbito(ambito: AmbitoAtencion) {
    this.edit.emit(ambito);
  }

  deleteAmbito(ambito: AmbitoAtencion) {
    this.remove.emit(ambito);
  }

}
