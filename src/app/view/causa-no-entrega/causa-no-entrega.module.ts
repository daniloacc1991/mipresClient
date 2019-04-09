import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// NGRX Imports
import { StoreModule } from '@ngrx/store';
import * as fromCausaNoEntrega from './store/reducers'
import { EffectsModule } from '@ngrx/effects';
import { CausaNoEntregaEffects } from './store/effects/causa-no-entrega.effects'
const NGRX_IMPORTS = [
  StoreModule.forFeature('causasNoEntrega', fromCausaNoEntrega.reducers),
  EffectsModule.forFeature([CausaNoEntregaEffects]),
];

import { CausaNoEntregaRoutingModule } from './causa-no-entrega-routing.module';
import { CausaNoEntregaComponent } from './causa-no-entrega.component';
import { CausaNoEntregaIndexComponent } from './components/causa-no-entrega-index/causa-no-entrega-index.component';
import { CausaNoEntregaNewComponent } from './components/causa-no-entrega-new/causa-no-entrega-new.component';
import { CausaNoEntregaDetailsComponent } from './components/causa-no-entrega-details/causa-no-entrega-details.component';
import { CausaNoEntregaEditComponent } from './components/causa-no-entrega-edit/causa-no-entrega-edit.component';
import { SharedModule } from 'src/app/core/shared.module';

@NgModule({
  declarations: [
    CausaNoEntregaComponent,
    CausaNoEntregaIndexComponent,
    CausaNoEntregaNewComponent,
    CausaNoEntregaDetailsComponent,
    CausaNoEntregaEditComponent
  ],
  imports: [
    CommonModule,
    CausaNoEntregaRoutingModule,
    ...NGRX_IMPORTS,
    SharedModule,
  ],
  entryComponents: [CausaNoEntregaComponent]
})
export class CausaNoEntregaModule { }
