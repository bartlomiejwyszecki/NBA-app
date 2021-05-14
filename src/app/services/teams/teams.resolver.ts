import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { _divisions } from './../../data/data';
import { TeamsService } from "./teams.service";

@Injectable({
    providedIn: 'root'
})
export class TeamsResolverService {

    constructor(private teamsService: TeamsService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.teamsService.getTeams();
    }
}