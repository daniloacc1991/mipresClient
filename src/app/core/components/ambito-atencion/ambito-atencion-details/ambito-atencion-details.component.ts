import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Input, Output } from '@angular/core';
import { AmbitoAtencion } from '@app-models/index';

@Component({
  selector: 'app-ambito-atencion-details',
  templateUrl: './ambito-atencion-details.component.html',
  styleUrls: ['./ambito-atencion-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AmbitoAtencionDetailsComponent implements OnInit {

  @Input() ambito: AmbitoAtencion;
  @Output() edit = new EventEmitter<AmbitoAtencion>();
  @Output() remove = new EventEmitter<AmbitoAtencion>();

  constructor() { }

  ngOnInit() {
  }

}
