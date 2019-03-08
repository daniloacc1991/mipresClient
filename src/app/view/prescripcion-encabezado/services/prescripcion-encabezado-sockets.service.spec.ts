import { TestBed } from '@angular/core/testing';

import { PrescripcionEncabezadoSocketsService } from './prescripcion-encabezado-sockets.service';

describe('PrescripcionsSocketsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PrescripcionEncabezadoSocketsService = TestBed.get(PrescripcionEncabezadoSocketsService);
    expect(service).toBeTruthy();
  });
});
