import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-estado-junta',
  template: `<router-outlet></router-outlet>`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EstadoJuntaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}