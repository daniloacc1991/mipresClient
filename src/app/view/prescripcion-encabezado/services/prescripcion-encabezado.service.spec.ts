import { TestBed } from '@angular/core/testing';

import { PrescripcionEncabezadoService } from './prescripcion-encabezado.service';

describe('PrescripcionEncabezadoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PrescripcionEncabezadoService = TestBed.get(PrescripcionEncabezadoService);
    expect(service).toBeTruthy();
  });
});
