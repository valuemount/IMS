import { TestBed } from '@angular/core/testing';

import { CreateInterviewService } from './create-interview.service';

describe('CreateInterviewService', () => {
  let service: CreateInterviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateInterviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
