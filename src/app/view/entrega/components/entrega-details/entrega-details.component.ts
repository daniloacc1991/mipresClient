import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store, ActionsSubject } from '@ngrx/store';
import { ofType } from '@ngrx/effects';
import { Observable, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

import * as fromRoot from 'src/app/reducers';
import * as fromEntrega from '../../store/reducers';
import { Entrega } from '@app-models/index';
import {
  SetCurrentEntregaId,
  EntregaActionsTypes,
  Delete,
  DeleteSuccess,
  Load
} from '../../store/actions/entrega.actions';


@Component({
  selector: 'app-entrega-details',
  templateUrl: './entrega-details.component.html',
  styleUrls: ['./entrega-details.component.scss']
})
export class EntregaDetailsComponent implements OnInit, OnDestroy {

  entrega$: Observable<Entrega> = this.store.select(fromEntrega.getCurrentEntrega);
  redirectSub: Subscription;

  constructor(
    private store: Store<fromRoot.State>,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private actionsSubject: ActionsSubject
  ) {
    this.store.dispatch(new SetCurrentEntregaId(this.activatedRoute.snapshot.params['entregaId']));
  }

  ngOnInit() {
    this.entrega$ = this.store.select(fromEntrega.getCurrentEntrega);

    this.redirectSub = this.actionsSubject.pipe(
      ofType(EntregaActionsTypes.DELETE_SUCCESS),
      filter((action: DeleteSuccess) => {
        return action.payload === +this.activatedRoute.snapshot.params['entregaId']
      })
    )
      .subscribe(_ => this.router.navigate['/entrega']);

    this.redirectSub = this.actionsSubject.pipe(
      filter(action => action.type === EntregaActionsTypes.DELETE_SUCCESS),
    )
      .subscribe(_ => this.router.navigate(['/entrega']));

    this.activatedRoute.params.subscribe(params => {
      this.store.dispatch(new Load(+params['entregaId']));
    });
  }

  editEntrega(entrega: Entrega) {
    this.store.dispatch(new SetCurrentEntregaId(entrega.id));
    this.router.navigate(['/entrega', entrega.id, 'edit']);
  }

  deleteEntrega(entrega: Entrega) {
    const r = confirm('Are you sure?');
    if (r) {
      this.store.dispatch(new Delete(entrega.id));
    }
  }

  ngOnDestroy() {
    this.redirectSub.unsubscribe();
  }

}
