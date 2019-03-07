import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './Auth/guard/auth.guard';
import { AppComponent } from './app.component';
import { LayautComponent } from './core/components/shared/layaut/layaut.component';

const routes: Routes = [
  {
    path: '',
    component: LayautComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'ambito-atencion',
        canActivate: [AuthGuard],
        loadChildren: 'src/app/ambito-atencion/ambito-atencion.module#AmbitoAtencionModule'
      },
    ]
  },
  {
    path: 'login',
    loadChildren: 'src/app/Auth/auth.module#AuthModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
