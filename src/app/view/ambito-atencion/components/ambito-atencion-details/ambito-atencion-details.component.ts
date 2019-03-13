import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store, ActionsSubject, select } from '@ngrx/store';
import { ofType } from '@ngrx/effects';
import { Observable, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { AmbitoAtencion } from '@app-models/index';
import * as fromRoot from 'src/app/reducers';
import * as fromAmbito from '../../store/reducers';
import {
  AmbitoAtencionActionsTypes,
  SetCurrentAmbitoAtencionId,
  Delete,
  DeleteSuccess,
  Load,
} from '../../store/actions/ambito-atencion.actions';

@Component({
  selector: 'app-ambito-atencion-details',
  templateUrl: './ambito-atencion-details.component.html',
  styleUrls: ['./ambito-atencion-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AmbitoAtencionDetailsComponent implements OnInit, OnDestroy {

  ambito$: Observable<AmbitoAtencion>;
  redirectSub: Subscription;

  constructor(
    private store: Store<fromRoot.State>,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private actionsSubject: ActionsSubject
  ) {
    this.store.dispatch(new SetCurrentAmbitoAtencionId(this.activatedRoute.snapshot.params['ambitoId']));
  }

  ngOnInit() {
    this.ambito$ = this.store.select(fromAmbito.getCurrentAmbitoAtencion);

    this.redirectSub = this.actionsSubject.pipe(
      ofType(AmbitoAtencionActionsTypes.DELETE_SUCCESS),
      filter((action: DeleteSuccess) => {
        return action.payload === +this.activatedRoute.snapshot.params['ambitoId']
      })
    )
      .subscribe(_ => this.router.navigate['/ambito-atencion']);

    this.redirectSub = this.actionsSubject.pipe(
      filter(action => action.type === AmbitoAtencionActionsTypes.DELETE_SUCCESS),
    )
      .subscribe(_ => this.router.navigate(['/ambito-atencion']));

    this.activatedRoute.params.subscribe(params => {
      console.log('Actividad en el activatedRoute Desde Ambito Details')
      this.store.dispatch(new Load(+params['ambitoId']));
    });
  }

  editAmbito(ambito: AmbitoAtencion) {

    this.store.dispatch(new SetCurrentAmbitoAtencionId(ambito.id));

    this.router.navigate(['/ambito-atencion', ambito.id, 'edit']);

  }

  deleteAmbito(ambito: AmbitoAtencion) {
    const r = confirm('Are you sure?');
    if (r) {
      this.store.dispatch(new Delete(ambito.id));
    }
  }

  ngOnDestroy() {
    this.redirectSub.unsubscribe();
  }

}
