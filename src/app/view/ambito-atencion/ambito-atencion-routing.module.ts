import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AmbitoAtencionComponent } from './ambito-atencion.component';
import { AmbitoAtencionIndexComponent } from './components/ambito-atencion-index/ambito-atencion-index.component';
import { TitleResolver } from '../../reducers/resolves/title.resolves';
import { AmbitoAtencionDetailsComponent } from './components/ambito-atencion-details/ambito-atencion-details.component';
import { AmbitoAtencionEditComponent } from './components/ambito-atencion-edit/ambito-atencion-edit.component';
import { AmbitoAtencionNewComponent } from './components/ambito-atencion-new/ambito-atencion-new.component';

const routes: Routes = [
  {
    path: '',
    component: AmbitoAtencionComponent,
    children: [
      {
        path: '',
        component: AmbitoAtencionIndexComponent,
        pathMatch: 'full',
        data: { 
          title: 'Listar Ambitos',
          titlePage: 'Lista de Ambitos de Atención - Mipres San Luis',
          urls: [
            { title: 'Administracion', url: '/' },
            { title: 'Ambitos Atencion' },
            { title: 'Listar' }
          ]
         },
        resolve: { title: TitleResolver }
      },
      {
        path: 'new',
        component: AmbitoAtencionNewComponent,
        pathMatch: 'full',
        data: { 
          title: 'AmbitoAtencion/Nuevo',
          titlePage: 'Crear de Ambito de Atención - Mipres San Luis'
         },
        resolve: { title: TitleResolver }
      },
      {
        path: ':ambitoId',
        component: AmbitoAtencionDetailsComponent,
        pathMatch: 'full',
        data: { 
          title: 'Ver Ambito Atención',
          titlePage: 'Ver Ambito de Atención - Mipres San Luis'
         },
        resolve: { title: TitleResolver }
      },
      {
        path: ':ambitoId/edit',
        component: AmbitoAtencionEditComponent,
        pathMatch: 'full',
        data: { 
          title: 'AmbitoAtencion/Editar',
          titlePage: 'Editar de Ambito de Atención - Mipres San Luis'
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
export class AmbitoAtencionRoutingModule { }
