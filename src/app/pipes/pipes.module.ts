import { NgModule } from '@angular/core';
import { NumeralPipe } from './numeral';
import { TeamPipe } from './whichTeam';

@NgModule({
    declarations: [
        NumeralPipe,
        TeamPipe
    ],
    imports: [],
    exports: [
        NumeralPipe,
        TeamPipe
    ]
})
export class PipeModule { }