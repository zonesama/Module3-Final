import { TestBed } from '@angular/core/testing';

import { AwsomeService } from './awsome.service';

describe('AwsomeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AwsomeService = TestBed.get(AwsomeService);
    expect(service).toBeTruthy();
  });
});
