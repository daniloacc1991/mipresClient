import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Procedure } from '@app-models/index';

@Component({
  selector: 'app-process-detail',
  templateUrl: './process-detail.component.html',
  styleUrls: ['./process-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProcessDetailComponent implements OnInit {

  @Input() procedures: Procedure[];

  tipoPrestacion = [{ id: 1, descripcion: 'Única' }, { id: 2, descripcion: 'Sucesiva' }];

  constructor() { }

  ngOnInit() {
  }

}
