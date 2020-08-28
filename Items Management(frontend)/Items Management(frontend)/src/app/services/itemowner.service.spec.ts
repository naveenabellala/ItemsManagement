import { TestBed } from '@angular/core/testing';

import { ItemownerService } from './itemowner.service';

describe('ItemownerService', () => {
  let service: ItemownerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemownerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
