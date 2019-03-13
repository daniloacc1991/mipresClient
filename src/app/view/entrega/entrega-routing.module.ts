import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TitleResolver } from 'src/app/reducers/resolves/title.resolves';
import { EntregaComponent } from './entrega.component';
import { EntregaIndexComponent } from './components/entrega-index/entrega-index.component';
import { EntregaNewComponent } from './components/entrega-new/entrega-new.component';
import { EntregaDetailsComponent } from './components/entrega-details/entrega-details.component';

const routes: Routes = [
  {
    path: '',
    component: EntregaComponent,
    children: [
      {
        path: '',
        component: EntregaIndexComponent,
        pathMatch: 'full',
        data: { 
          title: 'Listar Entrega',
          titlePage: 'Lista de Entrega - Mipres San Luis',
          urls: [
            { title: 'Administracion', url: '/' },
            { title: 'Entrega' },
            { title: 'Listar' }
          ]
         },
        resolve: { title: TitleResolver }
      },
      {
        path: 'new/:idPrescripcionDetalle',
        component: EntregaNewComponent,
        pathMatch: 'full',
        data: { 
          title: 'Nueva Entrega',
          titlePage: 'Crear Entrega - Mipres San Luis'
         },
        resolve: { title: TitleResolver }
      },
      {
        path: ':entregaId',
        component: EntregaDetailsComponent,
        pathMatch: 'full',
        data: { 
          title: 'Ver Entrega',
          titlePage: 'Ver Entrega - Mipres San Luis'
         },
        resolve: { title: TitleResolver }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntregaRoutingModule {}
