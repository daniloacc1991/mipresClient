import { TestBed } from '@angular/core/testing';

import { FrecuenciaService } from './frecuencia.service';

describe('FrecuenciaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FrecuenciaService = TestBed.get(FrecuenciaService);
    expect(service).toBeTruthy();
  });
});
