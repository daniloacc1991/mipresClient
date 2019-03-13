import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

// Ngrx
import { Store } from '@ngrx/store'
import * as fromRoot from 'src/app/reducers';
import * as fromEntrega from '../../store/reducers';

import { Entrega } from '@app-models/index';
import { Router } from '@angular/router';
import {
  SetCurrentEntregaId,
  Delete
} from '../../store/actions/entrega.actions';

@Component({
  selector: 'app-entrega-index',
  templateUrl: './entrega-index.component.html',
  styleUrls: ['./entrega-index.component.scss']
})
export class EntregaIndexComponent implements OnInit {

  entregas$: Observable<Entrega[]>;

  constructor(
    private store: Store<fromRoot.State>,
    private router: Router,
  ) {
    this.entregas$ = this.store.select(fromEntrega.getAllEntrega);
  }

  ngOnInit() {
  }

  editEntrega(entrega: Entrega) {
    this.store.dispatch(new SetCurrentEntregaId(entrega.id));
    this.router.navigate(['/entrega', entrega.id, 'edit']);
  }

  showEntrega(entrega: Entrega) {
    this.store.dispatch(new SetCurrentEntregaId(entrega.id));
    this.router.navigate(['/entrega', entrega.id]);
  }

  deleteEntrega(entrega: Entrega) {
    const r = confirm('Está seguro?');
    if (r) {
      this.store.dispatch(new Delete(entrega.id));
    }
  }

}
