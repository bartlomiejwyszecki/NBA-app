import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Team } from 'src/app/models/divisions-model';
import { Standing } from 'src/app/models/standing';
import { TeamsService } from 'src/app/services/teams/teams.service';

@Component({
  selector: 'app-partial',
  templateUrl: './partial.component.html',
  styleUrls: ['./partial.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PartialComponent implements OnInit {
  @Input() team!: Team;
  standing!: Standing<string>;

  constructor(private http: TeamsService) { }

  ngOnInit(): void {
    const teamId = parseInt(this.team.teamId);
    this.http.getTeamStanding(teamId).subscribe(standing => {
      this.standing = standing.api.standings[0];
    });
  }
}
