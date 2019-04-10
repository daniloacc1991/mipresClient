import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {
  LoadPorJunta
} from '../../store/actions/prescripcion-detalle.actions';
import * as fromRoot from 'src/app/reducers'
import * as fromPrescripcionDetalle from '../../store/selectors/prescripcion-detalle.selectors';
import { PrescripcionDetalle } from '@app-models/index';

@Component({
  selector: 'app-prescripcion-detalle-junta-index',
  templateUrl: './prescripcion-detalle-junta-index.component.html',
  styleUrls: ['./prescripcion-detalle-junta-index.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrescripcionDetalleJuntaIndexComponent implements OnInit {

  prescripcionesDetalle$: Observable<PrescripcionDetalle[]> = this.store.select(fromPrescripcionDetalle.getAllPrescripcionesDetalle);
  isLoading$: Observable<boolean> = this.store.select(fromPrescripcionDetalle.getIsLoading);
  totalPrescripcions$:Observable<number> = this.store.select(fromPrescripcionDetalle.getTotalPrescripcionDetalle);

  perPage: number = 10;
  page: number = 1;
  juntaId:number = 2;

  constructor(
    private store: Store<fromRoot.State>,
    private router: Router,
  ) { }

  ngOnInit() {
    this.store.dispatch(new LoadPorJunta({ perPage: this.perPage, page: this.page, juntaId: this.juntaId }));
  }

  showPrescripcion(p: PrescripcionDetalle){
    this.router.navigate(['prescripcion-encabezado', p.prescripcion.id])
  }

  changedPage(page: number){
    this.page = page;
    this.store.dispatch(new LoadPorJunta({ perPage: this.perPage, page: this.page, juntaId: this.juntaId }));
  }

  changedPageSize(pageSize: number){
    this.perPage = pageSize;
    this.store.dispatch(new LoadPorJunta({ perPage: this.perPage, page: this.page, juntaId: this.juntaId }));
  }

}
