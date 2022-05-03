import { TestBed } from '@angular/core/testing';

import { DespatchNotesNewService } from './despatch-notes-new.service';

describe('DespatchNotesNewService', () => {
  let service: DespatchNotesNewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DespatchNotesNewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
