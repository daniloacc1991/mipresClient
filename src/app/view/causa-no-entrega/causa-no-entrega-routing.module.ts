import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CausaNoEntregaComponent } from './causa-no-entrega.component';
import { CausaNoEntregaIndexComponent } from './components/causa-no-entrega-index/causa-no-entrega-index.component';
import { TitleResolver } from 'src/app/reducers/resolves/title.resolves';
import { CausaNoEntregaNewComponent } from './components/causa-no-entrega-new/causa-no-entrega-new.component';
import { CausaNoEntregaDetailsComponent } from './components/causa-no-entrega-details/causa-no-entrega-details.component';
import { CausaNoEntregaEditComponent } from './components/causa-no-entrega-edit/causa-no-entrega-edit.component';

const routes: Routes = [
  {
    path: '',
    component: CausaNoEntregaComponent,
    children: [
      {
        path: '',
        component: CausaNoEntregaIndexComponent,
        pathMatch: 'full',
        data: { 
          title: 'Listar Causa No Entrega',
          titlePage: 'Lista de Causa No Entrega - Mipres San Luis',
          urls: [
            { title: 'Administracion', url: '/' },
            { title: 'Causa No Entrega' },
            { title: 'Listar' }
          ]
         },
        resolve: { title: TitleResolver }
      },
      {
        path: 'new',
        component: CausaNoEntregaNewComponent,
        pathMatch: 'full',
        data: { 
          title: 'Nueva Causa No Entrega',
          titlePage: 'Crear Causa No Entrega - Mipres San Luis',
          urls: [
            { title: 'Administracion', url: '/' },
            { title: 'Causa No Entrega' },
            { title: 'Nueva' }
          ]
         },
        resolve: { title: TitleResolver }
      },
      {
        path: ':causaNoEntregaId',
        component: CausaNoEntregaDetailsComponent,
        pathMatch: 'full',
        data: { 
          title: 'Ver Causa No Entrega',
          titlePage: 'Ver Causa No Entrega - Mipres San Luis',
          urls: [
            { title: 'Administracion', url: '/' },
            { title: 'Causa No Entrega' },
            { title: 'Ver' }
          ]
         },
        resolve: { title: TitleResolver }
      },
      {
        path: ':causaNoEntregaId/edit',
        component: CausaNoEntregaEditComponent,
        pathMatch: 'full',
        data: { 
          title: 'Editar Causa No Entrega',
          titlePage: 'Edita Causa No Entrega - Mipres San Luis',
          urls: [
            { title: 'Administracion', url: '/' },
            { title: 'Causa No Entrega' },
            { title: 'Editar' }
          ]
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
export class CausaNoEntregaRoutingModule { }
