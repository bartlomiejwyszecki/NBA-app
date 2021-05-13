import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { _URL, _HEADERS } from '../url';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {
  url: string = _URL;
  headers = _HEADERS;

  teams!: any[];
  
  constructor(private http: HttpClient) { }

  getTeams(): Observable<any> {
    if (this.teams) {
      return of(this.teams);
    }
    return this.http.get<any>(`${this.url}/teams/league/standard`, {
      headers: this.headers
    }).pipe(
      tap(res => this.teams = res)
    );
  }

  getTeam(id: number): Observable<any> {
    return this.http.get<any>(`${this.url}/teams/teamId/${id}`, {
      headers: this.headers
    });
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
