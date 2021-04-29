import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Player } from 'src/app/models/players';
import { PlayersService } from 'src/app/services/players/players.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  stats: any;
  player!: Player<string>;

  constructor(private route: ActivatedRoute, private http: PlayersService) { }

  ngOnInit(): void {
    const param = this.route.snapshot.params.playerId
    const year = new Date().getFullYear()
    const month = new Date().getMonth()
    let season

    this.http.getPlayer(param).subscribe(player => {
      let PLAYER = player.api.players[0]
      this.player = player.api.players[0]

      this.http.getPlayersBDL(PLAYER.lastName).subscribe(players => {
          let newApiPlayerID = players.data.find((item: any) =>  item.first_name === PLAYER.firstName && 
            item.last_name === PLAYER.lastName).id

          if (month >= 0 && month < 10) {
            season = year - 1
          } else {
            season = year
          }

          this.http.getPlayerBDLStats(season, newApiPlayerID).subscribe(res => {
            if (res.data) {
              this.stats = res.data[0]
            } else {
              console.log('There is no data for this season and this player.')
            }
          })
      })
    })
  }

}
