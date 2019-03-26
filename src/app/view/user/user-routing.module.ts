import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { UserIndexComponent } from './components/user-index/user-index.component';
import { TitleResolver } from 'src/app/reducers/resolves/title.resolves';
import { UserNewComponent } from './components/user-new/user-new.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: '',
        component: UserIndexComponent,
        pathMatch: 'full',
        data: { 
          title: 'Listar Usuarios',
          titlePage: 'Lista Usuarios - Mipres San Luis',
          urls: [
            { title: 'Administracion', url: '/' },
            { title: 'Usuarios' },
            { title: 'Listar' }
          ]
         },
        resolve: { title: TitleResolver }
      },
      {
        path: 'new',
        component: UserNewComponent,
        pathMatch: 'full',
        data: { 
          title: 'User/Nuevo',
          titlePage: 'Crear Estado Junta - Mipres San Luis'
         },
        resolve: { title: TitleResolver }
      },
      {
        path: ':userId',
        component: UserDetailsComponent,
        pathMatch: 'full',
        data: { 
          title: 'Ver Usuario',
          titlePage: 'Ver Usuario - Mipres San Luis'
         },
        resolve: { title: TitleResolver }
      },
      {
        path: ':userId/edit',
        component: UserEditComponent,
        pathMatch: 'full',
        data: { 
          title: 'Editar Usuario',
          titlePage: 'Edita Usuario - Mipres San Luis'
         },
        resolve: { title: TitleResolver }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
