import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  SetCurrentPrescripcionId,
  Delete,
  Import,
  LoadPerPage,
} from '@app-prescripcionsEnc/store/actions/prescripcions.actions';
import * as fromRoot from 'src/app/reducers';
import * as fromPrescripcions from '../../store/selectors/prescipcions.selectors';
import { Prescripcion, ImportarxFecha, ImportaFechaSuccess } from '@app-models/index';


@Component({
  selector: 'app-prescripcion-encabezado-index',
  templateUrl: './prescripcion-encabezado-index.component.html',
  styleUrls: ['./prescripcion-encabezado-index.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrescripcionEncabezadoIndexComponent implements OnInit {

  prescripcions$: Observable<Prescripcion[]> = this.store.select(fromPrescripcions.getAllPrescripcions);;
  msjImport$: Observable<ImportaFechaSuccess> = this.store.select(fromPrescripcions.getImportSuccessRes);;
  isImportLoading$: Observable<boolean> = this.store.select(fromPrescripcions.getImportLoading);
  totalPrescripcion$: Observable<number> = this.store.select(fromPrescripcions.getTotalPrescripcions);
  perPage: number = 10;
  page: number = 1;
  text: string = '&';

  constructor(
    public store: Store<fromRoot.State>,
    private router: Router,
  ) { }

  ngOnInit() {
    this.store.dispatch(new LoadPerPage({ perPage: this.perPage, page: this.page, term: this.text }));
  }

  changedPage(page: number) {
    this.page = page;
    this.store.dispatch(new LoadPerPage({ perPage: this.perPage, page: this.page, term: this.text }));
  }

  changedPageSize(pageSize: number) {
    this.perPage = pageSize;
    this.store.dispatch(new LoadPerPage({ perPage: this.perPage, page: this.page, term: this.text }));
  }

  changedSearch(text: string) {
    if (text === null || text === '') {
      this.text = '&';
    } else {
      this.text = text;
    }
    this.store.dispatch(new LoadPerPage({ perPage: this.perPage, page: this.page, term: this.text }));
  }

  importPrescripcion(data: ImportarxFecha) {
    this.store.dispatch(new Import(data));
  }

  showPrescripcion(prescripcion: Prescripcion) {
    this.store.dispatch(new SetCurrentPrescripcionId(prescripcion.id));
    this.router.navigate(['/prescripcion-encabezado', prescripcion.id]);
  }

  editPrescripcion(prescripcion: Prescripcion) {
    this.store.dispatch(new SetCurrentPrescripcionId(prescripcion.id));
    this.router.navigate(['/prescripcion-encabezado', prescripcion.id, 'edit']);
  }

  deletePrescripcion(prescripcion: Prescripcion) {
    const r = confirm('Are you sure?');
    if (r) {
      this.store.dispatch(new Delete(prescripcion.id));
    }
  }
}
