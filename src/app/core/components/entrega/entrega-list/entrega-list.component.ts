import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Entrega } from '@app-models/index';

@Component({
  selector: 'app-entrega-list',
  templateUrl: './entrega-list.component.html',
  styleUrls: ['./entrega-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EntregaListComponent implements OnInit {

  @Input() entregas: Entrega[];
  @Output() edit = new EventEmitter<Entrega>();
  @Output() show = new EventEmitter<Entrega>();
  @Output() remove = new EventEmitter<Entrega>();

  page = 1;
  pageSize = 10;

  constructor() { }

  ngOnInit() {
  }

  showEntrega(entrega: Entrega) {
    this.show.emit(entrega);
  }

  editEntrega(entrega: Entrega) {
    this.edit.emit(entrega);
  }

  deleteEntrega(entrega: Entrega) {
    this.remove.emit(entrega);
  }

}
