import { Component, OnInit, Input, OnChanges, ChangeDetectionStrategy } from '@angular/core';
import { Medicine } from '@app-models/index';

@Component({
  selector: 'app-medicine-detail',
  templateUrl: './medicine-detail.component.html',
  styleUrls: ['./medicine-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MedicineDetailComponent implements OnInit, OnChanges {

  @Input() medicines: Medicine[];

  tipoPrestacion = [{ id: 1, descripcion: 'Única' }, { id: 2, descripcion: 'Sucesiva' }];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
  }

}
