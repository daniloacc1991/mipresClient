import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AmbitoAtencionComponent } from './ambito-atencion.component';
import { AmbitoAtencionIndexComponent } from './components/ambito-atencion-index/ambito-atencion-index.component';
import { TitleResolver } from '../reducers/resolves/title.resolves';

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
          title: 'AmbitoAtencion/Listar',
          titlePage: 'Lista de Ambitos de Atención - Mipres San Luis'
         },
        resolve: { title: TitleResolver }
      },
      {
        path: 'new',
        component: AmbitoAtencionComponent,
        pathMatch: 'full',
        data: { 
          title: 'AmbitoAtencion/Nuevo',
          titlePage: 'Crear de Ambito de Atención - Mipres San Luis'
         },
        resolve: { title: TitleResolver }
      },
      {
        path: ':ambitoId',
        component: AmbitoAtencionComponent,
        pathMatch: 'full',
        data: { 
          title: 'AmbitoAtencion/Ver',
          titlePage: 'Ver Ambito de Atención - Mipres San Luis'
         },
        resolve: { title: TitleResolver }
      },
      {
        path: ':ambitoId/edit',
        component: AmbitoAtencionComponent,
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
