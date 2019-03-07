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

@NgModule({
  declarations: [
    HeaderNavigationComponent,
    SidebarComponent,
    BreadcrumbComponent,
    LayautComponent,
    SpinnerComponent,
    AmbitoAtencionListComponent,
    AmbitoAtencionDetailsComponent,
    AmbitoAtencionFormComponent,
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
