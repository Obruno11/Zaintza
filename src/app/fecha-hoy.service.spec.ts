import { TestBed } from '@angular/core/testing';

import { FechaHoyService } from './demo/other/fecha-hoy.service';

describe('FechaHoyService', () => {
  let service: FechaHoyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FechaHoyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
