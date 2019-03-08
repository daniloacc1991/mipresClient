import { ChangeDetectionStrategy, Component, OnInit, Input, EventEmitter, Output, OnChanges } from '@angular/core';
import { Prescripcion, CIE10 } from '@app-models/index';
import { Cie10Service } from '../../../../view/cie10/services/cie10.service';

@Component({
  selector: 'app-prescripcion-details',
  templateUrl: './prescripcion-details.component.html',
  styleUrls: ['./prescripcion-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrescripcionDetailsComponent implements OnInit, OnChanges {

  @Input() prescripcion: Prescripcion;
  @Output() edit = new EventEmitter<Prescripcion>();
  @Output() remove = new EventEmitter<Prescripcion>();

  cie10: CIE10[];

  constructor(
    private cie10Service: Cie10Service,
  ) {

  }

  ngOnInit() {
    this.cie10Service.findAll().subscribe(
      res => {
        this.cie10 = res;
      }
    );
  }

  ngOnChanges() {
    console.log(this.prescripcion);
  }
}
