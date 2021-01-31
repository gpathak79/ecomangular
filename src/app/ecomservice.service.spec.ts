import { TestBed } from '@angular/core/testing';

import { EcomserviceService } from './ecomservice.service';

describe('EcomserviceService', () => {
  let service: EcomserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EcomserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
