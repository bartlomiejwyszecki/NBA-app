import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { _URL, _HEADERS } from '../url';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  url: string = _URL;
  headers = _HEADERS;

  players!: any[];

  constructor(private http: HttpClient) { }

  getPlayers(): Observable<any> {
    if (this.players) {
      return of(this.players);
    }
    return this.http.get<any>(`${this.url}/players/league/standard`, {
      headers: this.headers
    }).pipe(
      tap(res => this.players = res)
    );
  }

  getPlayer(playerId: string): Observable<any> {
    return this.http.get<any>(`${this.url}/players/playerId/${playerId}`, {
      headers: this.headers
    });
  }

  getPlayersBDL(lastName: string): Observable<any> {
      return this.http.get<any>(`https://www.balldontlie.io/api/v1/players?per_page=100&search=${lastName}`);
  }

  getPlayerBDLStats(season: number, id: number): Observable<any> {
      return this.http.get<any>(`https://www.balldontlie.io/api/v1/season_averages?season=${season}&player_ids[]=${id}`);
  }
}
