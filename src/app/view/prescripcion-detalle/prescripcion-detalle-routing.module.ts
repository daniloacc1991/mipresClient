import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TitleResolver } from 'src/app/reducers/resolves/title.resolves';
import { PrescripcionDetalleComponent } from './prescripcion-detalle.component';
import { PrescripcionDetalleJuntaIndexComponent } from './components/prescripcion-detalle-junta-index/prescripcion-detalle-junta-index.component';

const routes: Routes = [
  {
    path: '',
    component: PrescripcionDetalleComponent,
    children: [
      {
        path: '',
        component: PrescripcionDetalleJuntaIndexComponent,
        data: {
          title: 'Listar Prescripciones Junta',
          titlePage: 'Lista Prescripciones Junta - Mipres San Luis',
          urls: [
            { title: 'Administracion', url: '/' },
            { title: 'Prescripciones Junta' },
            { title: 'Listar' }
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
export class PrescripcionDetalleRoutingModule { }
