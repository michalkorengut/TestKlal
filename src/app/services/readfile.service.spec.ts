import { TestBed } from '@angular/core/testing';

import { ReadfileService } from './readfile.service';

describe('ReadfileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReadfileService = TestBed.get(ReadfileService);
    expect(service).toBeTruthy();
  });
});
