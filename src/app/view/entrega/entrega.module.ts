import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// NGRX
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromEntregas from './store/reducers';
import { EntregaEffects } from './store/effects/entrega.effects';
// import { EntregaResumenEffects } from './store/effects/entrega-resumen.effects';
import * as fromCausaNoEntrega from '../causa-no-entrega/store/reducers';
import { CausaNoEntregaEffects } from '../causa-no-entrega/store/effects/causa-no-entrega.effects';
const NGRX_IMPORTS = [
  StoreModule.forFeature('causasNoEntrega', fromCausaNoEntrega.reducers),
  EffectsModule.forFeature([CausaNoEntregaEffects]),
  StoreModule.forFeature('entrega', fromEntregas.reducers),
  EffectsModule.forFeature([EntregaEffects]),
];

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
    ...NGRX_IMPORTS,
  ],
  entryComponents: [EntregaComponent]
})
export class EntregaModule { }
