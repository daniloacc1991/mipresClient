import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store, ActionsSubject } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

import * as fromRoot from 'src/app/reducers';
import * as fromEntrega from '../../store/reducers';
import { Entrega } from '@app-models/index';
import {
  SetCurrentEntregaId
} from '../../store/actions/entrega.actions';

@Component({
  selector: 'app-entrega-details',
  templateUrl: './entrega-details.component.html',
  styleUrls: ['./entrega-details.component.scss']
})
export class EntregaDetailsComponent implements OnInit {

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

  }

}
