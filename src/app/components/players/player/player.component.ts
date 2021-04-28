import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayersService } from 'src/app/services/players/players.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  constructor(private route: ActivatedRoute, private http: PlayersService) { }

  ngOnInit(): void {
    const param = this.route.snapshot.params.playerId;

    this.http.getPlayer(param).subscribe(player => {
      console.log('Old API', player);
      let PLAYER = player.api.players[0];
      this.http.getPlayersBDL(PLAYER.lastName).subscribe(players => {
        let _player = players.data.find((item: any) => item.first_name === PLAYER.firstName && 
                                                          item.last_name === PLAYER.lastName && 
                                                          item.position === PLAYER.leagues.standard.pos);
        console.log('res', _player);
      })
    })
  }

}
