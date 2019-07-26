import { TestBed } from '@angular/core/testing';

import { ServicioMemeService } from './servicio-meme.service';

describe('ServicioMemeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicioMemeService = TestBed.get(ServicioMemeService);
    expect(service).toBeTruthy();
  });

});
