import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Team } from 'src/app/models/divisions-model';
import { ApiService } from 'src/app/services/api.service';
import { PlayersService } from 'src/app/services/players.service';
import { _divisions } from './../data/data';

@Component({
  selector: 'app-team-profile',
  templateUrl: './team-profile.component.html',
  styleUrls: ['./team-profile.component.scss']
})
export class TeamProfileComponent implements OnInit {
  team!: Team;

  constructor(private route: ActivatedRoute, private http: PlayersService) { }

  ngOnInit() {
    const param = this.route.snapshot.params.id;
    const team = _divisions.filter(div => div.teams.find(team => team.teamId == param))[0].teams.find(
      team => team.teamId == param);
    if (team !== undefined) {
      this.team = team;
    }
    // this.http.getPlayersByTeam(param);
  }
}
