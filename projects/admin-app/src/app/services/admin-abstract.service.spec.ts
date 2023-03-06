import { TestBed } from '@angular/core/testing';

import { AdminAbstractService } from './admin-abstract.service';

describe('AdminAbstractServiceService', () => {
  let service: AdminAbstractService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminAbstractService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
