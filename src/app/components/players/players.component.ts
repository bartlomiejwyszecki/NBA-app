import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Player } from './../../models/players';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {
  displayedColumns: string[] = ['firstName', 'lastName', 'playerId'];
  dataSource = new MatTableDataSource<Partial<Player<string>>>(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => this.dataSource.paginator = this.paginator);
  }

}

const ELEMENT_DATA: Partial<Player<string>>[] = [
  {
    "firstName": "Example",
    "lastName": "Example last",
    "playerId": "2"
  },
  {
    "firstName": "Example",
    "lastName": "Example last",
    "playerId": "2"
  },
  {
    "firstName": "Example",
    "lastName": "Example last",
    "playerId": "2"
  },
  {
    "firstName": "Example",
    "lastName": "Example last",
    "playerId": "2"
  },
  {
    "firstName": "Example",
    "lastName": "Example last",
    "playerId": "2"
  },
  {
    "firstName": "Example",
    "lastName": "Example last",
    "playerId": "2"
  },
  {
    "firstName": "Example",
    "lastName": "Example last",
    "playerId": "2"
  },
  {
    "firstName": "Example",
    "lastName": "Example last",
    "playerId": "2"
  },
  {
    "firstName": "Example",
    "lastName": "Example last",
    "playerId": "2"
  },
  {
    "firstName": "Example",
    "lastName": "Example last",
    "playerId": "2"
  },
  {
    "firstName": "Example",
    "lastName": "Example last",
    "playerId": "2"
  },
  {
    "firstName": "Example",
    "lastName": "Example last",
    "playerId": "2"
  },
  {
    "firstName": "Example",
    "lastName": "Example last",
    "playerId": "2"
  },
  {
    "firstName": "Example",
    "lastName": "Example last",
    "playerId": "2"
  },
  {
    "firstName": "Example",
    "lastName": "Example last",
    "playerId": "2"
  },
  {
    "firstName": "Example",
    "lastName": "Example last",
    "playerId": "2"
  },
  {
    "firstName": "Example",
    "lastName": "Example last",
    "playerId": "2"
  },
  {
    "firstName": "Example",
    "lastName": "Example last",
    "playerId": "2"
  },
  {
    "firstName": "Example",
    "lastName": "Example last",
    "playerId": "2"
  },
  {
    "firstName": "Example",
    "lastName": "Example last",
    "playerId": "2"
  },
  {
    "firstName": "Example",
    "lastName": "Example last",
    "playerId": "2"
  },
  {
    "firstName": "Example",
    "lastName": "Example last",
    "playerId": "2"
  },
  {
    "firstName": "Example",
    "lastName": "Example last",
    "playerId": "2"
  },
  {
    "firstName": "Example",
    "lastName": "Example last",
    "playerId": "2"
  },
  {
    "firstName": "Example",
    "lastName": "Example last",
    "playerId": "2"
  },
  {
    "firstName": "Example",
    "lastName": "Example last",
    "playerId": "2"
  },
  {
    "firstName": "Example",
    "lastName": "Example last",
    "playerId": "2"
  },
  {
    "firstName": "Example",
    "lastName": "Example last",
    "playerId": "2"
  },
  {
    "firstName": "Example",
    "lastName": "Example last",
    "playerId": "2"
  },
  {
    "firstName": "Example",
    "lastName": "Example last",
    "playerId": "2"
  },
  {
    "firstName": "Example",
    "lastName": "Example last",
    "playerId": "2"
  },
  {
    "firstName": "Example",
    "lastName": "Example last",
    "playerId": "2"
  },
  {
    "firstName": "Example",
    "lastName": "Example last",
    "playerId": "2"
  },
  {
    "firstName": "Example",
    "lastName": "Example last",
    "playerId": "2"
  },
  {
    "firstName": "Example",
    "lastName": "Example last",
    "playerId": "2"
  },
  {
    "firstName": "Example",
    "lastName": "Example last",
    "playerId": "2"
  },
  {
    "firstName": "Example",
    "lastName": "Example last",
    "playerId": "2"
  },
  {
    "firstName": "Example",
    "lastName": "Example last",
    "playerId": "2"
  },
  {
    "firstName": "Example",
    "lastName": "Example last",
    "playerId": "2"
  },
  {
    "firstName": "Example",
    "lastName": "Example last",
    "playerId": "2"
  },
  {
    "firstName": "Example",
    "lastName": "Example last",
    "playerId": "2"
  },
  {
    "firstName": "Example",
    "lastName": "Example last",
    "playerId": "2"
  },
  {
    "firstName": "Example",
    "lastName": "Example last",
    "playerId": "2"
  },
  {
    "firstName": "Example",
    "lastName": "Example last",
    "playerId": "2"
  },
  {
    "firstName": "Example",
    "lastName": "Example last",
    "playerId": "2"
  },
  {
    "firstName": "Example",
    "lastName": "Example last",
    "playerId": "2"
  },
  {
    "firstName": "Example",
    "lastName": "Example last",
    "playerId": "2"
  },
  {
    "firstName": "Example",
    "lastName": "Example last",
    "playerId": "2"
  },
  {
    "firstName": "Example",
    "lastName": "Example last",
    "playerId": "2"
  },
  {
    "firstName": "Example",
    "lastName": "Example last",
    "playerId": "2"
  },
  {
    "firstName": "Example",
    "lastName": "Example last",
    "playerId": "2"
  },
  {
    "firstName": "Example",
    "lastName": "Example last",
    "playerId": "2"
  }
];