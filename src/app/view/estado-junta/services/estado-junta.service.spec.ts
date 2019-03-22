import { TestBed } from '@angular/core/testing';

import { EstadoJuntaService } from './estado-junta.service';

describe('EstadoJuntaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EstadoJuntaService = TestBed.get(EstadoJuntaService);
    expect(service).toBeTruthy();
  });
});
