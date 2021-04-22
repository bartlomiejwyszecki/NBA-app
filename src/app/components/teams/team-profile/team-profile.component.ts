import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Staff, Team } from 'src/app/models/divisions-model';
import { TeamsService } from 'src/app/services/teams/api.service';
import { _divisions, _staff } from './../data/data';

@Component({
  selector: 'app-team-profile',
  templateUrl: './team-profile.component.html',
  styleUrls: ['./team-profile.component.scss']
})
export class TeamProfileComponent implements OnInit {
  team!: Team;
  players!: any[];
  staff: Staff[] = _staff;

  constructor(private route: ActivatedRoute, private http: TeamsService) { }

  ngOnInit() {
    const param = this.route.snapshot.params.id;
    const team = _divisions.filter(div => div.teams.find(team => team.teamId == param))[0].teams.find(
      team => team.teamId == param);
    if (team !== undefined) {
      this.team = team;
    }

    // this.http.getNbaPlayers().subscribe(players => {
    //   this.players = players.api.players.filter((player: any) => player.teamId == param && player.startNba > 0);
    //   console.log(this.players);
    // });
  }
}
