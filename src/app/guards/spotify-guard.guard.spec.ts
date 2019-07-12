import { TestBed, async, inject } from '@angular/core/testing';

import { SpotifyGuardGuard } from './spotify-guard.guard';

describe('SpotifyGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpotifyGuardGuard]
    });
  });

  it('should ...', inject([SpotifyGuardGuard], (guard: SpotifyGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
