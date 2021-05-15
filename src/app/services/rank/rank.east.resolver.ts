import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { catchError, tap } from "rxjs/operators";
import { RankService } from "./rank.service";

@Injectable({
    providedIn: 'root'
})
export class RankEastResolver implements Resolve<any> {

    constructor(private rankService: RankService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.rankService.getStandingsByConference('east').pipe(
            tap(data => console.log('data' + data)),
            catchError((error) => {
                throw 'Error in East rank resolver ' + error;
            })
        )
    }
}