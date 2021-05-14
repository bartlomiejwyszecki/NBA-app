import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Division } from 'src/app/models/divisions-model';
import { TeamsService } from 'src/app/services/teams/teams.service';
import { _divisions } from '../../data/data';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {
  divisions: Division[] = [];

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data: any) => {
      this.divisions = data.teams;
    })
  }
}
