import { TestBed } from '@angular/core/testing';

import { CausaNoEntregaSocketService } from './causa-no-entrega-socket.service';

describe('CausaNoEntregaSocketService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CausaNoEntregaSocketService = TestBed.get(CausaNoEntregaSocketService);
    expect(service).toBeTruthy();
  });
});
