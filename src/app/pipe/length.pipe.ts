import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lengthPipe'
})
export class LengthPipe implements PipeTransform {

  transform(value: string, ...args: any[]): string {
    let length = value.length;
    let dig = +args[0];
    let start = length - dig;
    let end = length;
    let data = value.slice(start,end);
    return data;
  }

}
