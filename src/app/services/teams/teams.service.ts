import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { _URL, _HEADERS } from '../url';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {
  url: string = _URL;
  headers = _HEADERS;

  constructor(private http: HttpClient) { }

  getTeams(): Observable<any> {
    return this.http.get<any>(`${this.url}/teams/league/standard`, {
      headers: this.headers
    });
  }

  getTeam(id: number): Observable<any> {
    return this.http.get<any>(`${this.url}/teams/teamId/${id}`, {
      headers: {
        "x-rapidapi-key": "7c6dc4e545mshbaaf72020470cdfp19ffa1jsn82e089938c32",
	      "x-rapidapi-host": "api-nba-v1.p.rapidapi.com"
      }
    });
  }

  getNbaPlayers(): Observable<any> {
    return this.http.get<any>(`${this.url}/players/league/standard`, {
      headers: {
        "x-rapidapi-key": "7c6dc4e545mshbaaf72020470cdfp19ffa1jsn82e089938c32",
	      "x-rapidapi-host": "api-nba-v1.p.rapidapi.com"
      }
    });
  }

  getPlayersByTeam(teamId: number) {
    return this.getNbaPlayers();
  }

  getTeamStanding(teamId: number):Observable<any> {
    return this.http.get<any>(`${this.url}/standings/standard/2020/teamId/${teamId}`, {
      headers: {
        "x-rapidapi-key": "7c6dc4e545mshbaaf72020470cdfp19ffa1jsn82e089938c32",
	      "x-rapidapi-host": "api-nba-v1.p.rapidapi.com"
      }
    });
  }
}
