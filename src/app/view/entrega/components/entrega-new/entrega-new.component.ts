import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store, ActionsSubject } from '@ngrx/store';
import { ofType } from '@ngrx/effects';
import { Observable, Subscription, of } from 'rxjs';
import { map } from 'rxjs/operators';


import {
  EntregaActionsTypes,
  Create,
  CreateSuccess,
  LoadDetail
} from '../../store/actions/entrega.actions';
import { PrescripcionDetalle, Entrega } from '@app-models/index';
import * as fromRoot from 'src/app/reducers';
import * as fromEntrega from '../../store/reducers';

@Component({
  selector: 'app-entrega-new',
  templateUrl: './entrega-new.component.html',
  styleUrls: ['./entrega-new.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EntregaNewComponent implements OnInit {

  prescripcionDetalle$: Observable<PrescripcionDetalle> = this.store.select(fromEntrega.getPrescripcionDetalle);
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

}
