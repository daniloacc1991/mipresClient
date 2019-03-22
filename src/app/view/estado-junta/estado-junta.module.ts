import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// NGRX
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromEstadosJuntas from './store/reducers';
import { EstadoJuntaEffects } from './store/effects/estado-junta.effects';
const NGRX_IMPORTS = [
  StoreModule.forFeature('estadosJunta', fromEstadosJuntas.reducers),
  EffectsModule.forFeature([EstadoJuntaEffects]),
]

import { EstadoJuntaRoutingModule } from './estado-junta-routing.module';
import { SharedModule } from '../../core/shared.module';
import { EstadoJuntaComponent } from './estado-junta.component';
import { EstadoJuntaDetailsComponent } from './components/estado-junta-details/estado-junta-details.component';
import { EstadoJuntaEditComponent } from './components/estado-junta-edit/estado-junta-edit.component';
import { EstadoJuntaIndexComponent } from './components/estado-junta-index/estado-junta-index.component';
import { EstadoJuntaNewComponent } from './components/estado-junta-new/estado-junta-new.component';

@NgModule({
  declarations: [
    EstadoJuntaComponent,
    EstadoJuntaDetailsComponent,
    EstadoJuntaEditComponent,
    EstadoJuntaIndexComponent,
    EstadoJuntaNewComponent,
  ],
  imports: [
    CommonModule,
    EstadoJuntaRoutingModule,
    SharedModule,
    ...NGRX_IMPORTS,
  ],
  entryComponents: [
    EstadoJuntaComponent
  ]
})
export class EstadoJuntaModule { }
