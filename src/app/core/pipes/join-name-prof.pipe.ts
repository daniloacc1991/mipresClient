import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'joinNameProf'
})
export class JoinNameProfPipe implements PipeTransform {

  // transform(pn: string, pa: string , sn?: string, sa?: string): string {
  transform(pn: string, args: string[]): string {
    const pa = args[0] ? ` ${args[0]}` : '';
    const sn = args[1] ? ` ${args[1]}` : '';
    const sa = args[2] ? ` ${args[2]}` : '';
    return pn + sn + pa + sa;
  }

}
