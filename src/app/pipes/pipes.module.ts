import { NgModule } from '@angular/core';
import { NumeralPipe } from './numeral';
import { StreakPipe } from './streak';
import { TeamPipe } from './whichTeam';

@NgModule({
    declarations: [
        NumeralPipe,
        TeamPipe,
        StreakPipe
    ],
    imports: [],
    exports: [
        NumeralPipe,
        TeamPipe,
        StreakPipe
    ]
})
export class PipeModule { }