import { TestBed } from '@angular/core/testing';

import { OrderHeadersNewService } from './order-headers-new.service';

describe('OrderHeadersNewService', () => {
  let service: OrderHeadersNewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderHeadersNewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
