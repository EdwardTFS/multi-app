import { TestBed } from '@angular/core/testing';

import { ClientAbstractService } from './client-abstract.service';

describe('ClientAbstractService', () => {
  let service: ClientAbstractService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientAbstractService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
