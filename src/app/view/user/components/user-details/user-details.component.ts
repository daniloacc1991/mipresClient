import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store, ActionsSubject } from '@ngrx/store';
import { ofType } from '@ngrx/effects';
import { Observable, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { User } from '@app-models/index';
import {
  UserActionsTypes,
  SetCurrentUserId,
  Load,
  Delete,
  DeleteSuccess,
} from '../../store/actions/user.actions';
import * as fromRoot from 'src/app/reducers';
import * as fromUser from '../../store/selectors/user.selectors';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit, OnDestroy {

  user$: Observable<User>;
  redirectSub: Subscription;
  userId: number;

  constructor(
    private router: Router,
    private activatedRouter: ActivatedRoute,
    private store: Store<fromRoot.State>,
    private actionsSubject: ActionsSubject,
  ) { }

  ngOnInit() {
    this.userId = this.activatedRouter.snapshot.params['userId'];
    this.store.dispatch(new SetCurrentUserId(this.userId));
    this.user$ = this.store.select(fromUser.getCurrentUser);

    this.redirectSub = this.actionsSubject.pipe(
      ofType(UserActionsTypes.DELETE_SUCCESS),
      filter((action: DeleteSuccess) => {
        return action.payload === this.userId;
      })
    )
      .subscribe(_ => this.router.navigate(['/user']))

    this.activatedRouter.params.subscribe(
      params => this.store.dispatch(new Load(params['userId']))
    );
  }

  editUser(user: User) {
    this.store.dispatch(new SetCurrentUserId(user.id));
    this.router.navigate(['/user', user.id, 'edit']);
  }

  deleteUser(user: User) {
    const r = confirm('Are you sure?');
    if (r) {
      this.store.dispatch(new Delete(user.id));
    }
  }

  ngOnDestroy() {
    this.redirectSub.unsubscribe();
  }

}
