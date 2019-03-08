import { TestBed } from '@angular/core/testing';

import { AmbitoAtencionService } from './ambito-atencion.service';

describe('AmbitoAtencionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AmbitoAtencionService = TestBed.get(AmbitoAtencionService);
    expect(service).toBeTruthy();
  });
});
