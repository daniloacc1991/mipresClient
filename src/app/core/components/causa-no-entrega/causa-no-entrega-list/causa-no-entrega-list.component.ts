import { Component, ChangeDetectionStrategy, Input, EventEmitter, Output, OnInit } from '@angular/core';
import { CausaNoEntrega } from '@app-models/index';

@Component({
  selector: 'app-causa-no-entrega-list',
  templateUrl: './causa-no-entrega-list.component.html',
  styleUrls: ['./causa-no-entrega-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CausaNoEntregaListComponent implements OnInit {

  @Input() causasNoEntrega: CausaNoEntrega[];
  @Output() edit = new EventEmitter<CausaNoEntrega>();
  @Output() show = new EventEmitter<CausaNoEntrega>();
  @Output() remove = new EventEmitter<CausaNoEntrega>();

  page = 1;
  pageSize = 10;

  constructor() { }

  ngOnInit() {

  }

  showCausaNoEntrega(causaNoEntrega: CausaNoEntrega) {
    this.show.emit(causaNoEntrega);
  }

  editCausaNoEntrega(causaNoEntrega: CausaNoEntrega) {
    this.edit.emit(causaNoEntrega);
  }

  deleteCausaNoEntrega(causaNoEntrega: CausaNoEntrega) {
    this.remove.emit(causaNoEntrega);
  }

}
