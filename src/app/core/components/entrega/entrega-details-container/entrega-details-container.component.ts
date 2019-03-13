import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Entrega } from '@app-models/index';

@Component({
  selector: 'app-entrega-details-container',
  templateUrl: './entrega-details-container.component.html',
  styleUrls: ['./entrega-details-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EntregaDetailsContainerComponent implements OnInit {

  @Input() entrega: Entrega;
  @Output() edit = new EventEmitter<Entrega>();
  @Output() remove = new EventEmitter<Entrega>();

  constructor() { }

  ngOnInit() {
  }

}
