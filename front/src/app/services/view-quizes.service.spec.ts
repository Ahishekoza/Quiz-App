import { TestBed } from '@angular/core/testing';

import { ViewQuizesService } from './view-quizes.service';

describe('ViewQuizesService', () => {
  let service: ViewQuizesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewQuizesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
