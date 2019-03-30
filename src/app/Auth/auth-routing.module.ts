import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { TitleResolver } from '../reducers/resolves/title.resolves';
import { LogoutComponent } from './components/logout/logout.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: 'logout',
    pathMatch: 'full',
    component: LogoutComponent,
    // canActivate: [AuthGuard],
    data: {
      title: 'Cerrar Sesion',
      titlePage: 'Cerrar Sesion - Mipres San Luis'
    },
    resolve: { title: TitleResolver }
  },
  {
    path: 'change-password',
    pathMatch: 'full',
    component: ChangePasswordComponent,
    // canActivate: [AuthGuard],
    data: {
      title: 'Cambiar Contraseña',
      titlePage: 'Cambiar Contraseña - Mipres San Luis'
    },
    resolve: { title: TitleResolver }
  },
  {
    path: '',
    pathMatch: 'full',
    component: LoginComponent,
    data: {
      title: 'Iniciar Sesion',
      titlePage: 'Iniciar Sesion - Mipres San Luis',
    },
    resolve: { title: TitleResolver }
  },
  // {
  //   path: '**',
  //   pathMatch: 'full',
  //   redirectTo: '/'
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
