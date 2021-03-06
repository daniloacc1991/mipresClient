import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromAmbitos from './store/reducers';
import { AmbitoAtencionEffects } from './store/effects/ambito.atencion.effects';
import { AmbitoAtencionRoutingModule } from './ambito-atencion-routing.module';
import { AmbitoAtencionComponent } from './ambito-atencion.component';
import { SharedModule } from '../../core/shared.module';
import { AmbitoAtencionIndexComponent } from './components/ambito-atencion-index/ambito-atencion-index.component';
import { AmbitoAtencionDetailsComponent } from './components/ambito-atencion-details/ambito-atencion-details.component';
import { AmbitoAtencionEditComponent } from './components/ambito-atencion-edit/ambito-atencion-edit.component';
import { AmbitoAtencionNewComponent } from './components/ambito-atencion-new/ambito-atencion-new.component';

@NgModule({
  declarations: [
    AmbitoAtencionComponent,
    AmbitoAtencionIndexComponent,
    AmbitoAtencionDetailsComponent,
     AmbitoAtencionEditComponent,
     AmbitoAtencionNewComponent,
    ],
  imports: [
    CommonModule,
    AmbitoAtencionRoutingModule,
    SharedModule,
    StoreModule.forFeature('ambitoAtencion', fromAmbitos.reducers),
    EffectsModule.forFeature([AmbitoAtencionEffects]),
  ],
  entryComponents: [AmbitoAtencionComponent]
})
export class AmbitoAtencionModule { }
