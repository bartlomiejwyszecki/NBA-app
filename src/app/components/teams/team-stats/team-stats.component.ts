import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Team } from 'src/app/models/divisions-model';
import { _divisions } from './../data/data';

@Component({
  selector: 'app-team-stats',
  templateUrl: './team-stats.component.html',
  styleUrls: ['./team-stats.component.scss']
})
export class TeamStatsComponent implements OnInit {
  team!: Team;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const param = this.route.snapshot.params.id;
    const team = _divisions.filter(div => div.teams.find(team => team.teamId == param))[0].teams.find(
      team => team.teamId == param);
    if (team !== undefined) {
      this.team = team;
    }
  }
}
