import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Team } from 'src/app/models/team';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-team-profile',
  templateUrl: './team-profile.component.html',
  styleUrls: ['./team-profile.component.scss']
})
export class TeamProfileComponent implements OnInit {
  team: Team | any = {};

  constructor(private http: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.http.getTeam(this.route.snapshot.params.id).subscribe(team => {
      this.team = team.api.teams[0];
      console.log(this.team);
    });
  }

}
