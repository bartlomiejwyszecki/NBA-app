import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { _URL, _HEADERS } from '../url';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RankService {
  url: string = _URL;
  headers = _HEADERS;

  constructor(private http: HttpClient) { }

  getStandingsByConference(conference: string): Observable<any> {
    return this.http.get<any>(`${this.url}/standings/standard/2020/conference/${conference}`, {
      headers: this.headers
    })
  }
}
