import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AmbitoAtencion } from '@app-models/index';
import { SetCurrentAmbitoAtencionId, Delete } from '../../store/actions/ambito-atencion.actions';
import * as fromRoot from 'src/app/reducers';
import * as fromAmbito from '../../store/reducers';

@Component({
  selector: 'app-ambito-atencion-index',
  templateUrl: './ambito-atencion-index.component.html',
  styleUrls: ['./ambito-atencion-index.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AmbitoAtencionIndexComponent implements OnInit {

  ambitoAtencion$: Observable<AmbitoAtencion[]>;
  constructor(
    private store: Store<fromRoot.State>,
    private router: Router,
  ) {
    this.ambitoAtencion$ = this.store.pipe(
      select(fromAmbito.getAllAmbitoAtencion)
    );
  }

  ngOnInit() {
  }

  editAmbito(ambito: AmbitoAtencion) {
    this.store.dispatch(new SetCurrentAmbitoAtencionId(ambito.id));
    this.router.navigate(['/ambito-atencion', ambito.id, 'edit']);
  }

  showAmbito(ambito: AmbitoAtencion) {
    this.store.dispatch(new SetCurrentAmbitoAtencionId(ambito.id));
    this.router.navigate(['/ambito-atencion', ambito.id]);
  }

  deleteAmbito(ambito: AmbitoAtencion) {
    const r = confirm('Está seguro?');
    if (r) {
      this.store.dispatch(new Delete(ambito.id));
    }
  }
}
