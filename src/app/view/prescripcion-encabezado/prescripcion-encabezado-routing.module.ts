import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TitleResolver } from 'src/app/reducers/resolves/title.resolves';
import { PrescripcionEncabezadoComponent } from './prescripcion-encabezado.component';
import { PrescripcionEncabezadoIndexComponent } from './components/prescripcion-encabezado-index/prescripcion-encabezado-index.component';
import { PrescripcionEncabezadoDetailsComponent } from './components/prescripcion-encabezado-details/prescripcion-encabezado-details.component';

const routes: Routes = [
  {
    path: '',
    component: PrescripcionEncabezadoComponent,
    children: [
      {
        path: '',
        component: PrescripcionEncabezadoIndexComponent,
        pathMatch: 'full',
        data: { 
          title: 'Listar Prescripciones',
          titlePage: 'Lista Prescripciones - Mipres San Luis',
          urls: [
            { title: 'Usuarios', url: '/' },
            { title: 'Prescripciones' },
            { title: 'Listar' }
          ]
         },
        resolve: { title: TitleResolver }
      },
      {
        path: ':prescripcionId',
        component: PrescripcionEncabezadoDetailsComponent,
        pathMatch: 'full',
        data: { 
          title: 'Ver Prescripción',
          titlePage: 'Ver Prescripción - Mipres San Luis'
         },
        resolve: { title: TitleResolver }
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrescripcionEncabezadoRoutingModule { }
