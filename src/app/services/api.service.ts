import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly url: string = 'https://api-nba-v1.p.rapidapi.com';

  constructor(private http: HttpClient) { }

  getPlayers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}/players/league/NBA`, {
      headers: {
        "x-rapidapi-key": "7c6dc4e545mshbaaf72020470cdfp19ffa1jsn82e089938c32",
        "x-rapidapi-host": "api-nba-v1.p.rapidapi.com"
      }
    });
  }

  getTeams(): Observable<any> {
    return this.http.get<any>(`${this.url}/teams/league/standard`, {
      headers: {
        "x-rapidapi-key": "7c6dc4e545mshbaaf72020470cdfp19ffa1jsn82e089938c32",
        "x-rapidapi-host": "api-nba-v1.p.rapidapi.com"
      }
    });
  }
}
