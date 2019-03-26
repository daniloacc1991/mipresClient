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
  Delete,
  DeleteSuccess
} from '../../store/actions/estado-junta.actions';
import * as fromRoot from 'src/app/reducers'
import * as fromEstadoJunta from '../../store/selectors/estado-junta.selectors'
import { EstadoJunta } from '@app-models/index';

@Component({
  selector: 'app-estado-junta-details',
  templateUrl: './estado-junta-details.component.html',
  styleUrls: ['./estado-junta-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EstadoJuntaDetailsComponent implements OnInit {

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
      ofType(EstadoJuntaActionsTypes.DELETE_SUCCESS),
      filter((action: DeleteSuccess) => {
        return action.payload === +this.activatedRoute.snapshot.params['estadoJuntaId']
      })
    )
      .subscribe(_ => this.router.navigate['/estado-junta']);

    this.redirectSub = this.actionsSubject.pipe(
      filter(action => action.type === EstadoJuntaActionsTypes.DELETE_SUCCESS),
    )
      .subscribe(_ => this.router.navigate(['/estado-junta']));

    this.activatedRoute.params.subscribe(params => {
      this.store.dispatch(new Load(+params['estadoJuntaId']));
    });
  }

  editEstadoJunta(estadoJunta: EstadoJunta) {

    this.store.dispatch(new SetCurrentEstadoJuntaId(estadoJunta.id));

    this.router.navigate(['/estado-junta', estadoJunta.id, 'edit']);

  }

  deleteEstadoJunta(estadoJunta: EstadoJunta) {
    const r = confirm('Are you sure?');
    if (r) {
      this.store.dispatch(new Delete(estadoJunta.id));
    }
  }

  ngOnDestroy() {
    this.redirectSub.unsubscribe();
  }

}
