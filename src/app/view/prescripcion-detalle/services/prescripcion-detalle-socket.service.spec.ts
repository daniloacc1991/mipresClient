import { TestBed } from '@angular/core/testing';

import { PrescripcionDetalleSocketService } from './prescripcion-detalle-socket.service';

describe('PrescripcionDetalleSocketService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PrescripcionDetalleSocketService = TestBed.get(PrescripcionDetalleSocketService);
    expect(service).toBeTruthy();
  });
});
