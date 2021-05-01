import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PlayersService } from 'src/app/services/players/players.service';
import { _actualTeams } from '../../data/data';
import { Player } from './../../models/players';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {
  loaded: boolean = false;

  displayedColumns: string[] = ['name', 'teamId', 'number', 'position', 'heightInMeters', 'weightInKilograms', 'country'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private http: PlayersService) { }

  ngOnInit(): void {
    this.http.getPlayers().subscribe(players => {
      this.dataSource.data = players.api.players.filter((player: any) => player.teamId > 0 
      && _actualTeams.includes(player.teamId)
      && player.leagues.standard.active != 0
      && parseInt(player.startNba) >= 1999
      && player.heightInMeters > 0
      && player.weightInKilograms > 0
      && player.country !== ' ');
      console.log(this.dataSource.data);

      setTimeout(() => this.dataSource.paginator = this.paginator);
      setTimeout(() => this.dataSource.sort = this.sort);

      this.loaded = true;
    })
  }

  searchFor(value: string) {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
}