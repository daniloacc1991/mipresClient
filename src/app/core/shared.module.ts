import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// PrimeNg
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';

// Angular Material
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDatepickerModule, MatFormFieldModule, MatInputModule } from '@angular/material';

// Bootstrap
import { NgbModule, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderNavigationComponent } from './components/shared/header-navigation/header-navigation.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { BreadcrumbComponent } from './components/shared/breadcrumb/breadcrumb.component';
import { LayautComponent } from './components/shared/layaut/layaut.component';
import { SpinnerComponent } from './components/shared/spinner.component';
import { AmbitoAtencionListComponent } from './components/ambito-atencion/ambito-atencion-list/ambito-atencion-list.component';
import { AmbitoAtencionDetailsComponent } from './components/ambito-atencion/ambito-atencion-details/ambito-atencion-details.component';
import { AmbitoAtencionFormComponent } from './components/ambito-atencion/ambito-atencion-form/ambito-atencion-form.component';
import { PrescripcionListComponent } from './components/prescripcions/prescripcion-list/prescripcion-list.component';
import { PrescripcionDetailsComponent } from './components/prescripcions/prescripcion-details/prescripcion-details.component';
import { ProcessDetailComponent } from './components/process/process-detail/process-detail.component';
import { MedicineDetailComponent } from './components/medicine/medicine-detail/medicine-detail.component';
import { DeviceDetailComponent } from './components/devices/device-detail/device-detail.component';
import { ProductNutritionalDetailComponent } from './components/product-nutritional/product-nutritional-detail/product-nutritional-detail.component';
import { MatchValuePipe } from './pipes/match-value.pipe';
import { JoinNameProfPipe } from './pipes/join-name-prof.pipe';
import { EntregaListComponent } from './components/entrega/entrega-list/entrega-list.component';
import { EntregaFormComponent } from './components/entrega/entrega-form/entrega-form.component';
import { EntregaDetailsContainerComponent } from './components/entrega/entrega-details-container/entrega-details-container.component';
import { ServicioComplementarioDetalleComponent } from './components/servicio-complementario/servicio-complementario-detalle/servicio-complementario-detalle.component';
import { NumberToTextPipe } from './pipes/number-to-text.pipe';

@NgModule({
  declarations: [
    JoinNameProfPipe,
    MatchValuePipe,
    HeaderNavigationComponent,
    SidebarComponent,
    BreadcrumbComponent,
    LayautComponent,
    SpinnerComponent,
    AmbitoAtencionListComponent,
    AmbitoAtencionDetailsComponent,
    AmbitoAtencionFormComponent,
    PrescripcionListComponent,
    PrescripcionDetailsComponent,
    ProcessDetailComponent,
    MedicineDetailComponent,
    DeviceDetailComponent,
    ProductNutritionalDetailComponent,
    EntregaListComponent,
    EntregaFormComponent,
    EntregaDetailsContainerComponent,
    ServicioComplementarioDetalleComponent,
    NumberToTextPipe,
  ],
  exports: [
    HeaderNavigationComponent,
    SidebarComponent,
    BreadcrumbComponent,
    LayautComponent,
    SpinnerComponent,
    AmbitoAtencionListComponent,
    AmbitoAtencionDetailsComponent,
    AmbitoAtencionFormComponent,
    PrescripcionListComponent,
    PrescripcionDetailsComponent,
    EntregaListComponent,
    EntregaFormComponent,
    EntregaDetailsContainerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgbPaginationModule,
    NgbCollapseModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MessagesModule,
    ToastModule,
  ]
})
export class SharedModule { }
