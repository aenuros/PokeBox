import { TestBed } from '@angular/core/testing';

import { TypeCalcService } from './type-calc.service';

describe('TypeCalcService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TypeCalcService = TestBed.get(TypeCalcService);
    expect(service).toBeTruthy();
  });
});
