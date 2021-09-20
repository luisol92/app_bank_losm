import { TestBed } from '@angular/core/testing';

import { MenuGuardsService } from './menu-guards.service';

describe('MenuGuardsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MenuGuardsService = TestBed.get(MenuGuardsService);
    expect(service).toBeTruthy();
  });
});
