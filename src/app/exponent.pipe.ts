import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exponent'
})
export class ExponentPipe implements PipeTransform {

  transform(value: any, arg1: number, arg2 ?: number, arg3 ?: number): any {
    let result = value * arg1
    result = result * arg2;
    result = result + arg3;
    return result;
  }

}
