import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store, ActionsSubject } from '@ngrx/store';
import { ofType } from '@ngrx/effects';
import { Observable, Subscription } from 'rxjs';
import {
  EntregaActionsTypes,
  Create,
  CreateSuccess,
  LoadDetail
} from '../../store/actions/entrega.actions';
import { PrescripcionDetalle, Entrega, CausaNoEntrega } from '@app-models/index';
import * as fromRoot from 'src/app/reducers';
import * as fromEntrega from '../../store/reducers';
import * as fromCausaNoEntrega from '../../../causa-no-entrega/store/selectors/causa-no-entrega.selectors';

@Component({
  selector: 'app-entrega-new',
  templateUrl: './entrega-new.component.html',
  styleUrls: ['./entrega-new.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EntregaNewComponent implements OnInit, OnDestroy {

  prescripcionDetalle$: Observable<PrescripcionDetalle> = this.store.select(fromEntrega.getPrescripcionDetalle);
  causasNoEntrega$: Observable<CausaNoEntrega[]> = this.store.select(fromCausaNoEntrega.getAllCausasNoEntrega);
  isLoading$: Observable<boolean> = this.store.select(fromCausaNoEntrega.getIsLoading);
  redirectSub: Subscription;

  constructor(
    private store: Store<fromRoot.State>,
    private actionsSubject: ActionsSubject,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
    this.store.dispatch(new LoadDetail(this.activatedRoute.snapshot.params['idPrescripcionDetalle']));
  }

  ngOnInit() {
    this.redirectSub = this.actionsSubject.asObservable().pipe(
      ofType(EntregaActionsTypes.CREATE_SUCCESS)
    ).subscribe(
      (action: CreateSuccess) => this.router.navigate(['/entrega', action.payload.id])
    );
  }

  submitted(Entrega: Entrega) {
    this.store.dispatch(new Create(Entrega));
  }

  ngOnDestroy() {
    this.redirectSub.unsubscribe();
  }

}
