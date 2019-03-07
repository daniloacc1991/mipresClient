import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderNavigationComponent } from './components/shared/header-navigation/header-navigation.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { BreadcrumbComponent } from './components/shared/breadcrumb/breadcrumb.component';
import { LayautComponent } from './components/shared/layaut/layaut.component';
import { SpinnerComponent } from './components/shared/spinner.component';

@NgModule({
  declarations: [
    HeaderNavigationComponent,
    SidebarComponent,
    BreadcrumbComponent,
    LayautComponent,
    SpinnerComponent,
  ],
  exports: [
    HeaderNavigationComponent,
    SidebarComponent,
    BreadcrumbComponent,
    LayautComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
  ]
})
export class SharedModule { }
