import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store, ActionsSubject } from '@ngrx/store';
import { ofType } from '@ngrx/effects';
import { Observable, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import {
  EstadoJuntaActionsTypes,
  SetCurrentEstadoJuntaId,
  Load,
  Put,
  PutSuccess,
} from '../../store/actions/estado-junta.actions';
import * as fromRoot from 'src/app/reducers'
import * as fromEstadoJunta from '../../store/selectors/estado-junta.selectors'
import { EstadoJunta } from '@app-models/index';

@Component({
  selector: 'app-estado-junta-edit',
  templateUrl: './estado-junta-edit.component.html',
  styleUrls: ['./estado-junta-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EstadoJuntaEditComponent implements OnInit {

  estadoJunta$: Observable<EstadoJunta>;
  redirectSub: Subscription;

  constructor(
    private store: Store<fromRoot.State>,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private actionsSubject: ActionsSubject
  ) {
    this.store.dispatch(new SetCurrentEstadoJuntaId(this.activatedRoute.snapshot.params['estadoJuntaId']));
  }

  ngOnInit() {
    this.estadoJunta$ = this.store.select(fromEstadoJunta.getCurrenEstadoJunta);

    this.redirectSub = this.actionsSubject.pipe(
      ofType(EstadoJuntaActionsTypes.PUT_SUCCESS),
      filter((action: PutSuccess) => action.payload.id === +this.activatedRoute.snapshot.params['estadoJuntaId'])
    )
      .subscribe((action: PutSuccess) => this.router.navigate(['/estado-junta', action.payload.id]));

    this.activatedRoute.params.subscribe(params => {
      this.store.dispatch(new Load(+params['estadoJuntaId']));
    });
  }

  ngOnDestroy() {
    this.redirectSub.unsubscribe();
  }

  submitted(estadoJunta: EstadoJunta) {
    this.store.dispatch(new Put(estadoJunta));
  }

}
