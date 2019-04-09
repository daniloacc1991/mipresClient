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
import { EstadoJuntaDetalleComponent } from './components/estado-junta/estado-junta-detalle/estado-junta-detalle.component';
import { EstadoJuntaFormComponent } from './components/estado-junta/estado-junta-form/estado-junta-form.component';
import { EstadoJuntaListComponent } from './components/estado-junta/estado-junta-list/estado-junta-list.component';
import { UserFormComponent } from './components/user/user-form/user-form.component';
import { UserDetailContainerComponent } from './components/user/user-detail-container/user-detail-container.component';
import { UserListComponent } from './components/user/user-list/user-list.component';
import { CausaNoEntregaFormComponent } from './components/causa-no-entrega/causa-no-entrega-form/causa-no-entrega-form.component';
import { CausaNoEntregaListComponent } from './components/causa-no-entrega/causa-no-entrega-list/causa-no-entrega-list.component';
import { CausaNoEntregaDetailsContainerComponent } from './components/causa-no-entrega/causa-no-entrega-details/causa-no-entrega-details.component';

@NgModule({
  declarations: [
    JoinNameProfPipe,
    MatchValuePipe,
    NumberToTextPipe,
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
    EstadoJuntaDetalleComponent,
    EstadoJuntaFormComponent,
    EstadoJuntaListComponent,
    UserFormComponent,
    UserDetailContainerComponent,
    UserListComponent,
    CausaNoEntregaFormComponent,
    CausaNoEntregaListComponent,
    CausaNoEntregaDetailsContainerComponent,
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
    EntregaDetailsContainerComponent,
    EstadoJuntaDetalleComponent,
    EstadoJuntaFormComponent,
    EstadoJuntaListComponent,
    UserFormComponent,
    UserDetailContainerComponent,
    UserListComponent,
    CausaNoEntregaFormComponent,
    CausaNoEntregaListComponent,
    CausaNoEntregaDetailsContainerComponent,
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
