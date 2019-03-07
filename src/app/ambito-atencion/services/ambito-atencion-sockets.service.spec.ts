import { TestBed } from '@angular/core/testing';

import { AmbitoAtencionSocketsService } from './ambito-atencion-sockets.service';

describe('AmbitoAtencionSocketsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AmbitoAtencionSocketsService = TestBed.get(AmbitoAtencionSocketsService);
    expect(service).toBeTruthy();
  });
});
