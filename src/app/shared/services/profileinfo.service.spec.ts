import { TestBed } from '@angular/core/testing';

import { ProfileinfoService } from './profileinfo.service';

describe('ProfileinfoService', () => {
  let service: ProfileinfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfileinfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
