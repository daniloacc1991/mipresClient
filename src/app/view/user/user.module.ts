import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { UserIndexComponent } from './components/user-index/user-index.component';
import { UserNewComponent } from './components/user-new/user-new.component';

@NgModule({
  declarations: [
    UserComponent,
    UserDetailsComponent,
    UserEditComponent,
    UserIndexComponent,
    UserNewComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  entryComponents: [ UserComponent ]
})
export class UserModule { }
