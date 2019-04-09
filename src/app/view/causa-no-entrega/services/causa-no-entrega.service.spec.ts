import { TestBed } from '@angular/core/testing';

import { CausaNoEntregaService } from './causa-no-entrega.service';

describe('CausaNoEntregaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CausaNoEntregaService = TestBed.get(CausaNoEntregaService);
    expect(service).toBeTruthy();
  });
});
