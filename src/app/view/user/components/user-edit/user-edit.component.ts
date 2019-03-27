import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store, select, ActionsSubject } from '@ngrx/store';
import { ofType } from '@ngrx/effects';
import { Observable, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { User } from '@app-models/index';
import {
  UserActionsTypes,
  SetCurrentUserId,
  Load,
  Put,
  PutSuccess,
} from '../../store/actions/user.actions';
import * as fromRoot from 'src/app/reducers';
import * as fromUser from '../../store/selectors/user.selectors';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit, OnDestroy {

  user$: Observable<User>;
  redirecSub: Subscription;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private store: Store<fromRoot.State>,
    private actionsSubject: ActionsSubject,
  ) {
    this.store.dispatch(new SetCurrentUserId(this.activatedRoute.snapshot.params['userId']));
  }

  ngOnInit() {
    this.user$ = this.store.pipe(
      select(fromUser.getCurrentUser)
    );

    this.redirecSub = this.actionsSubject.pipe(
      ofType(UserActionsTypes.PUT_SUCCESS),
      filter((action: PutSuccess) => action.payload.id === +this.activatedRoute.snapshot.params['userId'])
    )
      .subscribe((action: PutSuccess) => this.router.navigate(['/user', action.payload.id]));

    this.activatedRoute.params.subscribe(params => {
      this.store.dispatch(new Load(+params['userId']));
    });
  }

  submitted(user: User) {
    this.store.dispatch(new Put(user));
  }

  ngOnDestroy() {
    this.redirecSub.unsubscribe();
  }

}
