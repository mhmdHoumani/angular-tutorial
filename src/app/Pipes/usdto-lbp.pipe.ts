import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'USDtoLBP'
})
export class USDtoLBPPipe implements PipeTransform {

  transform(value: number, ...args: any[]): number {
    const price = args[0];
    if (args[1] == 'LL')
      return value * price;
    return -1;
  }
}
