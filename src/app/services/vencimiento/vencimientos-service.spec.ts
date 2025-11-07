import { TestBed } from '@angular/core/testing';

import { VencimientosService } from './vencimientos-service';

describe('VencimientosService', () => {
  let service: VencimientosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VencimientosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
