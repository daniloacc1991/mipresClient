import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Store, ActionsSubject } from '@ngrx/store';
import { ofType } from '@ngrx/effects';
import { Subscription } from 'rxjs';
import { AmbitoAtencion } from '@app-models/index';
import * as fromRoot from 'src/app/reducers';
import {
  AmbitoAtencionActionsTypes,
  Create,
  CreateSuccess,
} from '../../store/actions/ambito-atencion.actions';

@Component({
  selector: 'app-ambito-atencion-new',
  templateUrl: './ambito-atencion-new.component.html',
  styleUrls: ['./ambito-atencion-new.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AmbitoAtencionNewComponent implements OnInit, OnDestroy {

  redirectSub: Subscription;

  constructor(
    private store: Store<fromRoot.State>,
    private router: Router,
    private actionsSubject: ActionsSubject,
  ) { }

  ngOnInit() {
    this.redirectSub = this.actionsSubject.asObservable().pipe(
      ofType(AmbitoAtencionActionsTypes.CREATE_SUCCESS)
    ).subscribe(
      (action: CreateSuccess) => this.router.navigate(['/ambito-atencion', action.payload.id])
    );

  }

  ngOnDestroy() {
    this.redirectSub.unsubscribe();
  }

  submitted(ambito: AmbitoAtencion) {
    this.store.dispatch(new Create(ambito));
  }

}
