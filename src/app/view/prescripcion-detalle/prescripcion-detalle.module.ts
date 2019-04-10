import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/core/shared.module';

import { StoreModule } from '@ngrx/store';
import * as fromPrescripcionesDetalle from './store/reducers'
import { EffectsModule } from '@ngrx/effects';
import { PrescripcionDetalleEffects } from './store/effects/prescripcion-detalle.effects'
const NGRX_IMPORTS = [
  StoreModule.forFeature('prescripcionesDetalle', fromPrescripcionesDetalle.reducers),
  EffectsModule.forFeature([PrescripcionDetalleEffects]),
];

import { PrescripcionDetalleRoutingModule } from './prescripcion-detalle-routing.module';
import { PrescripcionDetalleComponent } from './prescripcion-detalle.component';
import { PrescripcionDetalleJuntaIndexComponent } from './components/prescripcion-detalle-junta-index/prescripcion-detalle-junta-index.component';

@NgModule({
  declarations: [
    PrescripcionDetalleComponent,
    PrescripcionDetalleJuntaIndexComponent,
  ],
  imports: [
    CommonModule,
    PrescripcionDetalleRoutingModule,
    ...NGRX_IMPORTS,
    SharedModule,
  ],
  entryComponents: [PrescripcionDetalleComponent]
})
export class PrescripcionDetalleModule { }
