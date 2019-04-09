import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { CausaNoEntrega } from '@app-models/index';

@Component({
  selector: 'app-causa-no-entrega-container-details',
  templateUrl: './causa-no-entrega-details.component.html',
  styleUrls: ['./causa-no-entrega-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CausaNoEntregaDetailsContainerComponent implements OnInit {

  @Input() causaNoEntrega: CausaNoEntrega;
  @Output() edit = new EventEmitter<CausaNoEntrega>();
  @Output() remove = new EventEmitter<CausaNoEntrega>();

  constructor() { }

  ngOnInit() {
  }

}
