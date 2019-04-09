import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store, ActionsSubject } from '@ngrx/store';
import { Router } from '@angular/router';
import { ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import {
  SetCurrentCausaNoEntregaId,
  Delete
} from '../../store/actions/causa-no-entrega.actions';
import { CausaNoEntrega } from '@app-models/index';
import * as fromRoot from 'src/app/reducers';
import * as fromCausaNoEntrega from '../../store/selectors/causa-no-entrega.selectors';

@Component({
  selector: 'app-causa-no-entrega-index',
  templateUrl: './causa-no-entrega-index.component.html',
  styleUrls: ['./causa-no-entrega-index.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CausaNoEntregaIndexComponent implements OnInit {

  causasNoEntrega$: Observable<CausaNoEntrega[]> = this.store.select(fromCausaNoEntrega.getAllCausasNoEntrega);

  constructor(
    private store: Store<fromRoot.State>,
    private router: Router,
  ) { }

  ngOnInit() {

  }

  editCausaNoEntrega(causaNoEntrega: CausaNoEntrega) {
    this.store.dispatch(new SetCurrentCausaNoEntregaId(causaNoEntrega.id));
    this.router.navigate(['/causa-no-entrega', causaNoEntrega.id, 'edit']);
  }

  showCausaNoEntrega(CausaNoEntrega: CausaNoEntrega) {
    this.store.dispatch(new SetCurrentCausaNoEntregaId(CausaNoEntrega.id));
    this.router.navigate(['/causa-no-entrega', CausaNoEntrega.id]);
  }

  deleteCausaNoEntrega(CausaNoEntrega: CausaNoEntrega) {
    const r = confirm('Está seguro?');
    if (r) {
      this.store.dispatch(new Delete(CausaNoEntrega.id));
    }
  }

}
