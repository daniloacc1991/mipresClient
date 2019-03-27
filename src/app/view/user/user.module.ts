import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// NGRX Imports
import { StoreModule } from '@ngrx/store';
import * as fromUser from './store/reducers'
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './store/effects/user.effects';
const NGRX_IMPORTS = [
  StoreModule.forFeature('user', fromUser.reducers),
  EffectsModule.forFeature([UserEffects]),
]

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { UserIndexComponent } from './components/user-index/user-index.component';
import { UserNewComponent } from './components/user-new/user-new.component';
import { SharedModule } from 'src/app/core/shared.module';
import { UserSocketService } from './services/user-socket.service';

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
    UserRoutingModule,
    ...NGRX_IMPORTS,
    SharedModule
  ],
  entryComponents: [ UserComponent ],
  providers: [UserSocketService],
})
export class UserModule { }
