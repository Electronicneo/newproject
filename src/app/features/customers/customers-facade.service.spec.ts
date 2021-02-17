import { TestBed } from '@angular/core/testing';

import { CustomersFacadeService } from './customers-facade.service';

describe('CustomersFacadeService', () => {
  let service: CustomersFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomersFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
