import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstadoJuntaComponent } from './estado-junta.component';
import { EstadoJuntaIndexComponent } from './components/estado-junta-index/estado-junta-index.component';
import { TitleResolver } from 'src/app/reducers/resolves/title.resolves';
import { EstadoJuntaNewComponent } from './components/estado-junta-new/estado-junta-new.component';
import { EstadoJuntaDetailsComponent } from './components/estado-junta-details/estado-junta-details.component';
import { EstadoJuntaEditComponent } from './components/estado-junta-edit/estado-junta-edit.component';

const routes: Routes = [
  {
    path: '',
    component: EstadoJuntaComponent,
    children: [
      {
        path: '',
        component: EstadoJuntaIndexComponent,
        pathMatch: 'full',
        data: { 
          title: 'Listar Estados Junta',
          titlePage: 'Lista Estados Junta - Mipres San Luis',
          urls: [
            { title: 'Administracion', url: '/' },
            { title: 'Estado Junta' },
            { title: 'Listar' }
          ]
         },
        resolve: { title: TitleResolver }
      },
      {
        path: 'new',
        component: EstadoJuntaNewComponent,
        pathMatch: 'full',
        data: { 
          title: 'EstadoJunta/Nuevo',
          titlePage: 'Crear Estado Junta - Mipres San Luis'
         },
        resolve: { title: TitleResolver }
      },
      {
        path: ':estadoJuntaId',
        component: EstadoJuntaDetailsComponent,
        pathMatch: 'full',
        data: { 
          title: 'Ver Estado Junta',
          titlePage: 'Ver Estado Junta - Mipres San Luis'
         },
        resolve: { title: TitleResolver }
      },
      {
        path: ':estadoJuntaId/edit',
        component: EstadoJuntaEditComponent,
        pathMatch: 'full',
        data: { 
          title: 'Editar Estado Junta',
          titlePage: 'Edita Estado Junta - Mipres San Luis'
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
export class EstadoJuntaRoutingModule { }
