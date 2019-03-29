import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { ActionsSubject, Store } from '@ngrx/store';
import { ofType } from '@ngrx/effects';
import { Subscription } from 'rxjs';
import {
  EstadoJuntaActionsTypes,
  CreateSuccess,
  Create
} from '../../store/actions/estado-junta.actions';
import * as fromRoot from 'src/app/reducers';
import { EstadoJunta } from '@app-models/index';

@Component({
  selector: 'app-estado-junta-new',
  templateUrl: './estado-junta-new.component.html',
  styleUrls: ['./estado-junta-new.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EstadoJuntaNewComponent implements OnInit {

  redirectSub: Subscription;

  constructor(
    private store: Store<fromRoot.State>,
    private router: Router,
    private actionsSubject: ActionsSubject,
  ) { }

  ngOnInit() {
    this.redirectSub = this.actionsSubject.asObservable().pipe(
      ofType(EstadoJuntaActionsTypes.CREATE_SUCCESS)
    ).subscribe(
      (action: CreateSuccess) => this.router.navigate(['/estado-junta', action.payload.id])
    );

  }

  ngOnDestroy() {
    this.redirectSub.unsubscribe();
  }

  submitted(estadoJunta: EstadoJunta) {
    this.store.dispatch(new Create(estadoJunta));
  }

}
