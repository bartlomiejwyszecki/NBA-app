import { Pipe, PipeTransform } from '@angular/core';
import { Division } from '../models/divisions-model';
import { _divisions } from './../data/data';

@Pipe({
    name: 'team'
})
export class TeamPipe implements PipeTransform {

    transform(teamId: string): string | any {
        let divs: Division[] = _divisions;

        for (let div of divs) {
            for (let team of div.teams) {
                if (team.teamId == teamId) {
                    return team.shortName;
                }
            }
        }
    }
}