import { TestBed } from '@angular/core/testing';

import { EntregaGatewayService } from './entrega-gateway.service';

describe('EntregaGatewayService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EntregaGatewayService = TestBed.get(EntregaGatewayService);
    expect(service).toBeTruthy();
  });
});
