import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// NGRX
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromEntregas from './store/reducers';
import { EntregaEffects } from './store/effects/entrega.effects';

import { SharedModule } from 'src/app/core/shared.module';
import { EntregaRoutingModule } from './entrega-routing.module';
import { EntregaDetailsComponent } from './components/entrega-details/entrega-details.component';
import { EntregaIndexComponent } from './components/entrega-index/entrega-index.component';
import { EntregaNewComponent } from './components/entrega-new/entrega-new.component';
import { EntregaComponent } from './entrega.component';

@NgModule({
  declarations: [
    EntregaComponent,
    EntregaDetailsComponent,
    EntregaIndexComponent,
    EntregaNewComponent,
  ],
  imports: [
    CommonModule,
    EntregaRoutingModule,
    SharedModule,
    StoreModule.forFeature('entrega', fromEntregas.reducers),
    EffectsModule.forFeature([EntregaEffects]),
  ],
  entryComponents: [EntregaComponent]
})
export class EntregaModule { }
