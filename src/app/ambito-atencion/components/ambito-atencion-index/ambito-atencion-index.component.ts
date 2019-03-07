import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AmbitoAtencion } from '../../models/ambito-atencion';
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
  ) {
    this.ambitoAtencion$ = this.store.pipe(
      select(fromAmbito.getAllAmbitoAtencion)
    );
  }

  ngOnInit() {
  }

}
