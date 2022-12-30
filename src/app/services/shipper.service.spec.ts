import { TestBed } from '@angular/core/testing';

import { ShipperService } from './shipper.service';

describe('ProductsService', () => {
  let service: ShipperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShipperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});