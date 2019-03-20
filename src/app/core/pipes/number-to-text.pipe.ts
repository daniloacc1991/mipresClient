import { Pipe, PipeTransform } from '@angular/core';
import * as writtenNumber from 'written-number';

@Pipe({
  name: 'numberToText'
})
export class NumberToTextPipe implements PipeTransform {
  
  transform(number: any): string {
    writtenNumber.defaults.lang = 'es';
    return writtenNumber(number);
  }

}
