import { Component, Input, OnInit } from '@angular/core';
import { Team } from 'src/app/models/divisions-model';

@Component({
  selector: 'app-partial',
  templateUrl: './partial.component.html',
  styleUrls: ['./partial.component.scss']
})
export class PartialComponent implements OnInit {
  @Input() team!: Team;

  constructor() { }

  ngOnInit(): void {
  }

}
