import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Store, ActionsSubject } from '@ngrx/store';
import { ofType } from '@ngrx/effects';
import { Observable, Subscription } from 'rxjs';
import {
  CAUSA_NO_ENTREGA_ACTIONS_TYPES,
  Create,
  CreateSuccess,
} from '../../store/actions/causa-no-entrega.actions';
import { CausaNoEntrega } from '@app-models/index';
import * as fromRoot from 'src/app/reducers';
import * as fromCausaNoEntrega from '../../store/selectors/causa-no-entrega.selectors';

@Component({
  selector: 'app-causa-no-entrega-new',
  templateUrl: './causa-no-entrega-new.component.html',
  styleUrls: ['./causa-no-entrega-new.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CausaNoEntregaNewComponent implements OnInit, OnDestroy {

  prescripcionDetalle$: Observable<CausaNoEntrega> = this.store.select(fromCausaNoEntrega.getCurrentCausaNoEntrega);
  redirectSub: Subscription;

  constructor(
    private store: Store<fromRoot.State>,
    private actionsSubject: ActionsSubject,
    private router: Router,
  ) { }

  ngOnInit() {
    this.redirectSub = this.actionsSubject.asObservable().pipe(
      ofType(CAUSA_NO_ENTREGA_ACTIONS_TYPES.CREATE_SUCCESS)
    ).subscribe(
      (action: CreateSuccess) => this.router.navigate(['/causa-no-entrega', action.payload.id])
    );
  }

  submitted(causaNoEntrega: CausaNoEntrega) {
    this.store.dispatch(new Create(causaNoEntrega));
  }

  ngOnDestroy() {
    this.redirectSub.unsubscribe();
  }

}
