import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Team } from 'src/app/models/divisions-model';
import { Standing } from 'src/app/models/standing';
import { RankService } from 'src/app/services/rank/rank.service';
import { _divisions } from './../../data/data';

@Component({
  selector: 'app-rank',
  templateUrl: './rank.component.html',
  styleUrls: ['./rank.component.scss']
})
export class RankComponent implements OnInit {
  east: Team[] = [];
  west: Team[] = [];
  eastStandings: Standing<string>[] = [];
  westStandings: Standing<string>[] = [];

  constructor(private http: RankService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let teams: any = [];
    for (let i = 0; i < _divisions.length; i++) {
      for (let j = 0; j < 5; j++) {
        teams.push(_divisions[i].teams[j]);
      }
    }

    this.activatedRoute.data.subscribe(data => {
      this.eastStandings = data.east.api.standings;
      this.eastStandings.sort((a: any, b: any) => (parseInt(a.conference.rank) > parseInt(b.conference.rank)) ? 1 : -1);
      for (let i in this.eastStandings) {
        this.east.push(teams.find((team: any) => team.teamId === this.eastStandings[i].teamId));
      }

      this.westStandings = data.west.api.standings;
      this.westStandings.sort((a: any, b: any) => (parseInt(a.conference.rank) > parseInt(b.conference.rank)) ? 1 : -1);
      for (let i in this.westStandings) {
        this.west.push(teams.find((team: any) => team.teamId === this.westStandings[i].teamId));
      }
    });
  }
}
