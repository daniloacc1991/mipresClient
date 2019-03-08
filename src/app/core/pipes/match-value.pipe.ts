import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'matchValue'
})
export class MatchValuePipe implements PipeTransform {

  transform(value: any, args: any[]): any {
    for (const element of args[0]) {
      // tslint:disable-next-line:triple-equals
      if (element.id == value) {
        const v: string = element[args[1]];
        return v.toLocaleUpperCase();
      }
    }
  }

}
