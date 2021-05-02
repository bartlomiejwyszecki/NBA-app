import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'streak'
})
export class StreakPipe implements PipeTransform {

    transform(winStreak: string): string {
        return winStreak === "0" ? "L" : "W";
    }
}