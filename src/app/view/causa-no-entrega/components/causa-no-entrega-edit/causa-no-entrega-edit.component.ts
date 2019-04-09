import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store, ActionsSubject, select } from '@ngrx/store';
import { ofType } from '@ngrx/effects';
import { Observable, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { CausaNoEntrega } from '@app-models/index';
import {
  CAUSA_NO_ENTREGA_ACTIONS_TYPES,
  SetCurrentCausaNoEntregaId,
  Load,
  Put,
  PutSuccess,
} from '../../store/actions/causa-no-entrega.actions';
import * as fromRoot from 'src/app/reducers';
import * as fromCausaNoEntrega from '../../store/selectors/causa-no-entrega.selectors';

@Component({
  selector: 'app-causa-no-entrega-edit',
  templateUrl: './causa-no-entrega-edit.component.html',
  styleUrls: ['./causa-no-entrega-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CausaNoEntregaEditComponent implements OnInit {

  causaNoEntrega$: Observable<CausaNoEntrega> = this.store.select(fromCausaNoEntrega.getCurrentCausaNoEntrega);
  redirectSub: Subscription;

  constructor(
    private store: Store<fromRoot.State>,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private actionsSubject: ActionsSubject
  ) {
    this.store.dispatch(new SetCurrentCausaNoEntregaId(this.activatedRoute.snapshot.params['causaNoEntregaId']));
  }

  ngOnInit() {

    this.redirectSub = this.actionsSubject.pipe(
      ofType(CAUSA_NO_ENTREGA_ACTIONS_TYPES.PUT_SUCCESS),
      filter((action: PutSuccess) => action.payload.id === +this.activatedRoute.snapshot.params['causaNoEntregaId'])
    )
      .subscribe((action: PutSuccess) => this.router.navigate(['/causa-no-entrega', action.payload.id]));

    this.activatedRoute.params.subscribe(params => {
      this.store.dispatch(new Load(+params['causaNoEntregaId']));
    });
  }

  ngOnDestroy() {
    this.redirectSub.unsubscribe();
  }

  submitted(ambito: CausaNoEntrega) {
    this.store.dispatch(new Put(ambito));
  }

}
