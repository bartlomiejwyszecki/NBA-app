import { Component, OnInit } from '@angular/core';

import { Division } from 'src/app/models/divisions-model';
import { _divisions } from './data/data';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {
  divisions: Division[] = [];
  number: number = 1;

  constructor() {}

  ngOnInit(): void {
    this.divisions = _divisions;
  }
}
