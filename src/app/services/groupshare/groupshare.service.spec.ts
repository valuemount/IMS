import { TestBed } from '@angular/core/testing';

import { GroupshareService } from './groupshare.service';

describe('GroupshareService', () => {
  let service: GroupshareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroupshareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
