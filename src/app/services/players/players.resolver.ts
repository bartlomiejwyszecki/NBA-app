import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { catchError } from "rxjs/operators";
import { PlayersService } from "./players.service";

@Injectable({
    providedIn: 'root'
})
export class PlayersResolverService implements Resolve<any> {
    
    constructor(private playersService: PlayersService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.playersService.getPlayers().pipe(
            catchError((error) => {
                throw 'Error in players service resolver ' + error;
            })
        )
    }
}