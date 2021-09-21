import { TestBed } from '@angular/core/testing';

import { SesionGuardsService } from './sesion-guards.service';

describe('SesionGuardsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SesionGuardsService = TestBed.get(SesionGuardsService);
    expect(service).toBeTruthy();
  });
});
