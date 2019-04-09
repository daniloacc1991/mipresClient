import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store, ActionsSubject } from '@ngrx/store';
import { ofType } from '@ngrx/effects';
import { Observable, Subscription } from 'rxjs';
import { CausaNoEntrega } from '@app-models/index';
import {
  CAUSA_NO_ENTREGA_ACTIONS_TYPES,
  SetCurrentCausaNoEntregaId,
  Load,
  Delete,
  DeleteSuccess
} from '../../store/actions/causa-no-entrega.actions';
import * as fromRoot from 'src/app/reducers';
import * as fromCausaNoEntrega from '../../store/selectors/causa-no-entrega.selectors';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-causa-no-entrega-details',
  templateUrl: './causa-no-entrega-details.component.html',
  styleUrls: ['./causa-no-entrega-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CausaNoEntregaDetailsComponent implements OnInit, OnDestroy {

  causaNoEntrega$: Observable<CausaNoEntrega> = this.store.select(fromCausaNoEntrega.getCurrentCausaNoEntrega);
  redirectSub: Subscription;

  constructor(
    private store: Store<fromRoot.State>,
    private actionsSubject: ActionsSubject,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
    this.store.dispatch(new SetCurrentCausaNoEntregaId(+this.activatedRoute.snapshot.params['causaNoEntregaId']));
  }

  ngOnInit() {
    this.redirectSub = this.actionsSubject.pipe(
      ofType(CAUSA_NO_ENTREGA_ACTIONS_TYPES.DELETE_SUCCESS),
      filter((action: DeleteSuccess) => action.payload === +this.activatedRoute.snapshot.params['causaNoEntregaId'])
    )
      .subscribe(_ => this.router.navigate(['/causa-no-entrega']));

    this.redirectSub = this.actionsSubject.pipe(
      filter(action => action.type === CAUSA_NO_ENTREGA_ACTIONS_TYPES.DELETE_SUCCESS),
    )
      .subscribe(_ => this.router.navigate(['/causa-no-entrega']));

    this.activatedRoute.params.subscribe(params => {
      this.store.dispatch(new Load(+params['causaNoEntregaId']));
    });
  }

  editCausaNoEntrega(causaNoEntrega: CausaNoEntrega) {
    this.store.dispatch(new SetCurrentCausaNoEntregaId(causaNoEntrega.id));
    this.router.navigate(['/causa-no-entrega', causaNoEntrega.id, 'edit']);
  }

  deleteCausaNoEntrega(causaNoEntrega: CausaNoEntrega) {
    const r = confirm('Are you sure?');
    if (r) {
      this.store.dispatch(new Delete(causaNoEntrega.id));
    }
  }

  ngOnDestroy() {

  }

}
