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
  Load,
  Put,
  PutSuccess,
} from '../../store/actions/ambito-atencion.actions';

@Component({
  selector: 'app-ambito-atencion-edit',
  templateUrl: './ambito-atencion-edit.component.html',
  styleUrls: ['./ambito-atencion-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AmbitoAtencionEditComponent implements OnInit, OnDestroy {

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
    this.ambito$ = this.store.pipe(
      select(fromAmbito.getCurrentAmbitoAtencion)
    );

    this.redirectSub = this.actionsSubject.pipe(
      ofType(AmbitoAtencionActionsTypes.PUT_SUCCESS),
      filter((action: PutSuccess) => action.payload.id === +this.activatedRoute.snapshot.params['ambitoId'])
    )
      .subscribe((action: PutSuccess) => this.router.navigate(['/ambito-atencion', action.payload.id]));

    this.activatedRoute.params.subscribe(params => {
      this.store.dispatch(new Load(+params['ambitoId']));
    });
  }

  ngOnDestroy() {
    this.redirectSub.unsubscribe();
  }

  submitted(ambito: AmbitoAtencion) {
    this.store.dispatch(new Put(ambito));
  }

}
