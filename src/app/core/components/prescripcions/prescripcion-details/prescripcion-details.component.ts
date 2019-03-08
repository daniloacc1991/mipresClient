import { ChangeDetectionStrategy, Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Prescripcion } from '@app-models/index';

@Component({
  selector: 'app-prescripcion-details',
  templateUrl: './prescripcion-details.component.html',
  styleUrls: ['./prescripcion-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrescripcionDetailsComponent implements OnInit {

  @Input() prescripcion: Prescripcion;
  @Output() edit = new EventEmitter<Prescripcion>();
  @Output() remove = new EventEmitter<Prescripcion>();

  constructor( ) {}

  ngOnInit() {

  }
}
