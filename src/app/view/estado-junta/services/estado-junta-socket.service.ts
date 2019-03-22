import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EstadoJuntaSocketService extends Socket {

  constructor() {
    super({
      url: `${environment.socketUrl}/estado-junta-profesional`,
      options: {}
    });
  }
}
