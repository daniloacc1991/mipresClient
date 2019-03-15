import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EntregaGatewayService extends Socket {

  constructor() {
    super({
      url: `${environment.socketUrl}/entrega`,
      options: {}
    });
  }
}