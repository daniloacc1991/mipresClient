import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { User } from '@app-models/index';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserListComponent implements OnInit {

  @Input() users: User[];
  @Output() edit = new EventEmitter<User>();
  @Output() show = new EventEmitter<User>();
  @Output() remove = new EventEmitter<User>();

  page = 1;
  pageSize = 10;

  constructor() { }

  ngOnInit() {
  }

  showDetails(user: User) {
    this.show.emit(user);
  }

  editUser(user: User) {
    this.edit.emit(user);
  }

  deleteUser(user: User) {
    this.remove.emit(user);
  }

}
