import { TestBed } from '@angular/core/testing';

import { PrescripcionDetalleService } from './prescripcion-detalle.service';

describe('PrescripcionDetalleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PrescripcionDetalleService = TestBed.get(PrescripcionDetalleService);
    expect(service).toBeTruthy();
  });
});
