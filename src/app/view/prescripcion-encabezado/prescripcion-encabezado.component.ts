import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-prescripcion-encabezado',
  template: `
    <router-outlet></router-outlet>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrescripcionEncabezadoComponent {
  constructor() {}
}
