import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { User } from '@app-models/index';

@Component({
  selector: 'app-user-detail-container',
  templateUrl: './user-detail-container.component.html',
  styleUrls: ['./user-detail-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserDetailContainerComponent implements OnInit {

  @Input() user: User;
  @Output() edit = new EventEmitter<User>();
  @Output() remove = new EventEmitter<User>();

  constructor() { }

  ngOnInit() {
  }

}
