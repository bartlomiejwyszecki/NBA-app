import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'numeral'
})
export class NumeralPipe implements PipeTransform {

    transform(rank: string): string {
        return rank === '1' ? 'st' : 
               rank === '2' ? 'nd' :
               rank === '3' ? 'rd' : 
               Number(rank) > 3 ? 'th' : 'invalid number';
    }
}