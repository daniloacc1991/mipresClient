import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
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
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgbPaginationModule,
  ]
})
export class SharedModule { }
