import { TestBed } from '@angular/core/testing';

import { LogroServices } from './logro-services';

describe('LogroServices', () => {
  let service: LogroServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogroServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
