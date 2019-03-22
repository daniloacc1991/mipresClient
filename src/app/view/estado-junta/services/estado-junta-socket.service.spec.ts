import { TestBed } from '@angular/core/testing';

import { EstadoJuntaSocketService } from './estado-junta-socket.service';

describe('EstadoJuntaSocketService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EstadoJuntaSocketService = TestBed.get(EstadoJuntaSocketService);
    expect(service).toBeTruthy();
  });
});
