import { ChangeDetectionStrategy, Component, OnInit, OnDestroy } from '@angular/core';
import { Store, ActionsSubject, select } from '@ngrx/store';
import { ofType } from '@ngrx/effects';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Prescripcion } from '@app-models/index';
import * as fromRoot from 'src/app/reducers';
import * as fromPrescripcions from '../../store/selectors/prescipcions.selectors';
import {
  SetCurrentPrescripcionId,
  PrescripcionEncabezadoActionsTypes,
  Delete,
  DeleteSuccess,
  PutSuccess,
  Load
} from '@app-prescripcionsEnc/store/actions/prescripcions.actions';

@Component({
  selector: 'app-prescripcion-encabezado-details',
  templateUrl: './prescripcion-encabezado-details.component.html',
  styleUrls: ['./prescripcion-encabezado-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrescripcionEncabezadoDetailsComponent implements OnInit, OnDestroy {

  prescripcion$: Observable<Prescripcion> = this.store.select(fromPrescripcions.getcurrentPrescripcion);
  redirectSub: Subscription;
  relaodSub: Subscription;
  prescripcionId: number;

  constructor(
    private store: Store<fromRoot.State>,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private actionsSubject: ActionsSubject
  ) {
  }

  ngOnInit() {
    this.prescripcionId = this.activatedRoute.snapshot.params['prescripcionId'];
    this.store.dispatch(new SetCurrentPrescripcionId(this.prescripcionId));
    
    this.redirectSub = this.actionsSubject.pipe(
      ofType(PrescripcionEncabezadoActionsTypes.DELETE_SUCCESS),
      filter((action: DeleteSuccess) => {
        return action.payload === +this.prescripcionId
      })
    )
      .subscribe(_ => this.router.navigate['/prescripcion-encabezado']);

    this.redirectSub = this.actionsSubject.pipe(
      filter(action => action.type === PrescripcionEncabezadoActionsTypes.DELETE_SUCCESS),
    )
      .subscribe(_ => this.router.navigate(['/prescripcion-encabezado']));

    this.relaodSub = this.actionsSubject.pipe(
      ofType(PrescripcionEncabezadoActionsTypes.PUT_SUCCESS),
      filter((action: PutSuccess) => {
        return action.payload.id === +this.prescripcionId
      })
    )
      .subscribe(_ => this.router.navigate(['/prescripcion-encabezado']));

    this.redirectSub = this.actionsSubject.pipe(
      filter(action => action.type === PrescripcionEncabezadoActionsTypes.PUT_SUCCESS),
    )
      .subscribe(_ => this.router.navigate(['/prescripcion-encabezado']));



    this.activatedRoute.params.subscribe(params => {
      this.store.dispatch(new Load(+params['prescripcionId']));
    });
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

  ngOnDestroy() {
    this.relaodSub.unsubscribe();
    this.redirectSub.unsubscribe();
  }

}
