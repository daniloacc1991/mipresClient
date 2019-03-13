import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// NGRX
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromPrescripcions from './store/reducers';
import { PrescripcionsEffects } from './store/effetcs/prescripcions.effects';

import { SharedModule } from 'src/app/core/shared.module';
import { PrescripcionEncabezadoRoutingModule } from './prescripcion-encabezado-routing.module';
import { PrescripcionEncabezadoComponent } from './prescripcion-encabezado.component';
import { PrescripcionEncabezadoIndexComponent } from './components/prescripcion-encabezado-index/prescripcion-encabezado-index.component';
import { PrescripcionEncabezadoDetailsComponent } from './components/prescripcion-encabezado-details/prescripcion-encabezado-details.component';

@NgModule({
  declarations: [
    PrescripcionEncabezadoComponent,
    PrescripcionEncabezadoIndexComponent,
    PrescripcionEncabezadoDetailsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    PrescripcionEncabezadoRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forFeature('prescripcions', fromPrescripcions.reducers),
    EffectsModule.forFeature([PrescripcionsEffects]),
  ]
})
export class PrescripcionEncabezadoModule { }
