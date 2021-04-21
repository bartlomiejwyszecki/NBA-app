import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  private readonly url: string = 'https://api-nba-v1.p.rapidapi.com';

  constructor(private http: HttpClient) { }

  getPlayersByTeam(teamId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}/players/teamId/${teamId}`, {
      headers: {
        "x-rapidapi-key": "7c6dc4e545mshbaaf72020470cdfp19ffa1jsn82e089938c32",
	      "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
      }
    });
  }
}