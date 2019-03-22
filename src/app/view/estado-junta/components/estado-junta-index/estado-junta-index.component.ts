import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as fromRoot from 'src/app/reducers';
import * as fromEstadoJunta from '../../store/selectors/estado-junta.selectors'
import { EstadoJunta } from '@app-models/index';
import {
  SetCurrentEstadoJuntaId,
  Delete,
} from '../../store/actions/estado-junta.actions';

@Component({
  selector: 'app-estado-junta-index',
  templateUrl: './estado-junta-index.component.html',
  styleUrls: ['./estado-junta-index.component.scss']
})
export class EstadoJuntaIndexComponent implements OnInit {

  estadosJuntas$: Observable<EstadoJunta[]>;

  constructor(
    private store: Store<fromRoot.State>,
    private router: Router,
  ) { }

  ngOnInit() {
    this.estadosJuntas$ = this.store.select(fromEstadoJunta.getAllEstadosJunta);
  }

  editEstadoJunta(estadoJunta: EstadoJunta) {
    this.store.dispatch(new SetCurrentEstadoJuntaId(estadoJunta.id));
    this.router.navigate(['/estado-junta', estadoJunta.id, 'edit']);
  }

  showEstadoJunta(estadoJunta: EstadoJunta) {
    this.store.dispatch(new SetCurrentEstadoJuntaId(estadoJunta.id));
    this.router.navigate(['/estado-junta', estadoJunta.id]);
  }

  deleteEstadoJunta(estadoJunta: EstadoJunta) {
    const r = confirm('Está seguro?');
    if (r) {
      this.store.dispatch(new Delete(estadoJunta.id));
    }
  }

}
