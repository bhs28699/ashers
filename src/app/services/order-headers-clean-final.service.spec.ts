import { TestBed } from '@angular/core/testing';

import { OrderHeadersCleanFinalService } from './order-headers-clean-final.service';

describe('OrderHeadersCleanFinalService', () => {
  let service: OrderHeadersCleanFinalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderHeadersCleanFinalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
