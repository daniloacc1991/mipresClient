import { Component, OnInit, ChangeDetectionStrategy, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { PrescripcionDetalle } from '@app-models/index';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-prescripcion-detalle-list-container',
  templateUrl: './prescripcion-detalle-list-container.component.html',
  styleUrls: ['./prescripcion-detalle-list-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrescripcionDetalleListContainerComponent implements OnInit, OnChanges {

  @Input() prescripcionsDetalle: PrescripcionDetalle[];
  @Input() isLoading: boolean;
  @Input() totalPrescripcions: number;
  @Output() show = new EventEmitter<PrescripcionDetalle>();
  @Output() changePage = new EventEmitter<number>();
  @Output() changePageSize = new EventEmitter<number>();

  prescripcionsDetalle$: Observable<PrescripcionDetalle[]>;
  filter = new FormControl('');
  page = 1;
  pageSize = 10;

  constructor() { }

  ngOnInit() {
    this.filterPrescripcions();
  }

  ngOnChanges(){
    if(this.prescripcionsDetalle){
      this.filterPrescripcions();
    }
  }

  onPager(event: number) {
    this.changePage.emit(event);
  }

  changePagesize(event: any){
    this.changePageSize.emit(this.pageSize);
  }

  filterPrescripcions() {
    this.prescripcionsDetalle$ = this.filter.valueChanges.pipe(
      startWith(''),
      map(text => this.search(text))
    )
  }

  search(text: string): PrescripcionDetalle[] {
    return this.prescripcionsDetalle.filter(prescripcion => {
      const term = text.toLowerCase();
      return prescripcion.TipoTecnologia.includes(term)
    });
  }

}
