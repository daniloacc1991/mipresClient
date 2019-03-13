import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  SetCurrentPrescripcionId,
  Delete,
  Import
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

  prescripcions$: Observable<Prescripcion[]>;
  msjImport$: Observable<ImportaFechaSuccess> = this.store.select(fromPrescripcions.getImportSuccessRes);
  isImportLoading$: Observable<boolean> = this.store.select(fromPrescripcions.getImportLoading);

  constructor(
    public store: Store<fromRoot.State>,
    private router: Router,
  ) {
    this.prescripcions$ = this.store.select(fromPrescripcions.getAllPrescripcions);
  }

  ngOnInit() {
  }

  importPrescripcion(data: ImportarxFecha) {
    this.store.dispatch(new Import(data));
  }

  showPrescripcion(prescripcion: Prescripcion) {
    this.store.dispatch(new SetCurrentPrescripcionId(prescripcion.id));
    this.router.navigate(['/prescripcion-encabezado', prescripcion.id]);
  }

  editContact(prescripcion: Prescripcion) {
    this.store.dispatch(new SetCurrentPrescripcionId(prescripcion.id));
    this.router.navigate(['/prescripcion-encabezado', prescripcion.id, 'edit']);
  }

  deleteContact(prescripcion: Prescripcion) {
    const r = confirm('Are you sure?');
    if (r) {
      this.store.dispatch(new Delete(prescripcion.id));
    }
  }
}
