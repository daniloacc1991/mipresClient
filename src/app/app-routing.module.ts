import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './Auth/guard/auth.guard';
import { LayautComponent } from './core/components/shared/layaut/layaut.component';

const routes: Routes = [
  {
    path: '',
    component: LayautComponent,
    canActivate: [AuthGuard],
    data: {
      title: 'Home',
      titlePage: 'Home - Mipres San Luis'
    },
    children: [
      {
        path: 'ambito-atencion',
        canActivate: [AuthGuard],
        loadChildren: 'src/app/view/ambito-atencion/ambito-atencion.module#AmbitoAtencionModule'
      },
      {
        path: 'prescripcion-encabezado',
        canActivate: [AuthGuard],
        loadChildren: 'src/app/view/prescripcion-encabezado/prescripcion-encabezado.module#PrescripcionEncabezadoModule'
      },
      {
        path: 'entrega',
        canActivate: [AuthGuard],
        loadChildren: 'src/app/view/entrega/entrega.module#EntregaModule'
      },
    ],
  },
  {
    path: 'login',
    loadChildren: 'src/app/Auth/auth.module#AuthModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
