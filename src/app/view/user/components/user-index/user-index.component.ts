import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '@app-models/index';
import {
  SetCurrentUserId,
  Delete
} from '../../store/actions/user.actions'
import * as fromRoot from 'src/app/reducers';
import * as fromUser from '../../store/selectors/user.selectors';


@Component({
  selector: 'app-user-index',
  templateUrl: './user-index.component.html',
  styleUrls: ['./user-index.component.scss']
})
export class UserIndexComponent implements OnInit {

  users$: Observable<User[]>;

  constructor(
    private store: Store<fromRoot.State>,
    private router: Router,
  ) { }

  ngOnInit() {
    this.users$ = this.store.pipe(
      select(fromUser.getAllUsers),
    );
  }

  editUser(user: User) {
    this.store.dispatch(new SetCurrentUserId(user.id));
    this.router.navigate(['/user', user.id, 'edit']);
  }

  showUser(user: User) {
    this.store.dispatch(new SetCurrentUserId(user.id));
    this.router.navigate(['/user', user.id]);
  }

  deleteUser(user: User) {
    const r = confirm('Está seguro?');
    if (r) {
      this.store.dispatch(new Delete(user.id));
    }
  }
}
