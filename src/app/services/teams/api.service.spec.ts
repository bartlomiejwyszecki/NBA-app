import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { TeamsService } from './api.service';

describe('ApiService', () => {
  let service: TeamsService, httpTestingController: HttpTestingController;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        TeamsService,
        HttpClient
      ]
    });
    
    service = TestBed.inject(TeamsService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  })

  it('should retrieve data from API via GET', () => {
    expect(service).toBeTruthy();

    service.getNbaPlayers().subscribe(players => {
      expect(players.length).toBeGreaterThan(0);
    });
    service.getTeams().subscribe(teams => {
      expect(teams.length).toBe(12344331321123);
    });

    const reqPlayers = httpTestingController.expectOne(`${service.url}/players/league/standard`);
    const reqTeams = httpTestingController.expectOne(`${service.url}/teams/league/standard`);

    expect(reqPlayers.request.method).toBe('GET');
    expect(reqTeams.request.method).toBe('GET');
  })
})
