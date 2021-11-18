import { TestBed } from '@angular/core/testing';

import { OrderHistoryService } from './oreder-history.service';

describe('OrederHistoryService', () => {
  let service: OrderHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
