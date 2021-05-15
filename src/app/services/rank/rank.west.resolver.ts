import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { catchError } from "rxjs/operators";
import { RankService } from "./rank.service";

@Injectable({
    providedIn: 'root'
})
export class RankWestResolver implements Resolve<any> {

    constructor(private rankService: RankService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.rankService.getStandingsByConference('west').pipe(
            catchError((error) => {
                throw 'Error in East rank resolver ' + error;
            })
        )
    }
}