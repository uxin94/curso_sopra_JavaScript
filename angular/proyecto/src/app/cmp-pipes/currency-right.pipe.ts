import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyRight'
})
export class CurrencyRightPipe implements PipeTransform {

  transform(value: string): string {
    
    let simbolo = value.slice(0,1)
    
    return value.substring(1).concat(simbolo);
  }

}
