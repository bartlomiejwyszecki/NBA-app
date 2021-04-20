import { Component, OnInit } from '@angular/core';
import { _divisions, Divisions } from 'src/app/models/divisions-model';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {
  divisions: Divisions;

  constructor(private http: ApiService) {
    this.divisions = _divisions;
  }

  ngOnInit(): void {
    // this.http.getTeams().subscribe(teams => {
    //   for (let key in _divisions) {
    //     this.divisions[key as keyof Divisions].teams = teams.api.teams.filter(
    //       (team: any) => team.leagues.standard.divName.toLowerCase() === key);
    //   }
    // });
  }
}
