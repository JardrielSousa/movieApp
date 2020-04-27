import { TestBed } from '@angular/core/testing';

import { MovieService } from '../../components/movie/movie.service'

describe('MovieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MovieService = TestBed.get(MovieService);
    expect(service).toBeTruthy();
  });
});
