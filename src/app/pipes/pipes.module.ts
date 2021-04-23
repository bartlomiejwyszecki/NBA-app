import { NgModule } from '@angular/core';
import { NumeralPipe } from './numeral';

@NgModule({
    declarations: [
        NumeralPipe
    ],
    imports: [],
    exports: [
        NumeralPipe
    ]
})
export class PipeModule { }