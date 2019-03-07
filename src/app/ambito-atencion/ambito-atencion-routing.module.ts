import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AmbitoAtencionComponent } from './ambito-atencion.component';
import { AmbitoAtencionIndexComponent } from './components/ambito-atencion-index/ambito-atencion-index.component';

const routes: Routes = [
  {
    path: '',
    component: AmbitoAtencionComponent,
    children: [
      {
        path: '',
        component: AmbitoAtencionIndexComponent,
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AmbitoAtencionRoutingModule { }
