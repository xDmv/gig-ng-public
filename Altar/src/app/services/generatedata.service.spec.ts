import { TestBed } from '@angular/core/testing';

import { GeneratedataService } from './generatedata.service';

describe('GeneratedataService', () => {
  let service: GeneratedataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneratedataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
