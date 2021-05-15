import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { _URL, _HEADERS } from '../url';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { _divisions } from 'src/app/data/data';
import { Team } from 'src/app/models/divisions-model';

@Injectable({
  providedIn: 'root'
})
export class RankService {
  url: string = _URL;
  headers = _HEADERS;
  
  east!: Team[];
  west!: Team[];

  constructor(private http: HttpClient) { }

  getStandingsByConference(conference: string): Observable<any> {
    if (conference === 'west' && this.west) {
      return of(this.west);
    } else if (conference === 'east' && this.east) {
      return of(this.east);
    }
    return this.http.get<any>(`${this.url}/standings/standard/2020/conference/${conference}`, {
      headers: this.headers
    }).pipe(
      tap(res => conference === 'west' ? this.west = res : this.east = res)
    )
  }
}
