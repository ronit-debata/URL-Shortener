import { TestBed } from '@angular/core/testing';

import { SortURLService } from './sort-url.service';

describe('SortURLService', () => {
  let service: SortURLService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SortURLService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
