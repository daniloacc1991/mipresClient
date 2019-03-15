import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TitleResolver } from '../reducers/resolves/title.resolves';

const routes: Routes = [
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
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
