import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class PrescripcionDetalleSocketService extends Socket {

  constructor() {
    super({
      url: `${environment.socketUrl}/prescripcion-detalle`,
      options: {}
    });
  }
}
