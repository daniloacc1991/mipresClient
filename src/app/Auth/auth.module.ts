import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';

// NGRX
// import { StoreModule } from '@ngrx/store';
// import * as fromAuth from '../reducers';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './store/effects/auth.effect';
const NGRX_IMPORTS = [
  // StoreModule.forFeature('auth', fromAuth.reducers),
  EffectsModule.forFeature([AuthEffects]),
]

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    LoginComponent,
  ],
  exports: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    ...NGRX_IMPORTS,
    MatCardModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatButtonModule,
  ],
})
export class AuthModule { }
