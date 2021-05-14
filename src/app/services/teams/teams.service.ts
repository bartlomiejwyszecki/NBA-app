import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { _URL, _HEADERS } from '../url';
import { Observable, of } from 'rxjs';
import { _divisions } from './../../data/data';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {
  url: string = _URL;
  headers = _HEADERS;
  
  constructor(private http: HttpClient) { }

  getTeams() {
    return of(_divisions);
  }

  getNbaPlayers(): Observable<any> {
    return this.http.get<any>(`${this.url}/players/league/standard`, {
      headers: this.headers
    });
  }

  getPlayersByTeam(teamId: number) {
    return this.getNbaPlayers();
  }

  getTeamStanding(teamId: number):Observable<any> {
    return this.http.get<any>(`${this.url}/standings/standard/2020/teamId/${teamId}`, {
      headers: this.headers
    });
  }
}
