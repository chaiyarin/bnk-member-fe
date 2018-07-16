import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bnkSuffix'
})
export class BnkSuffixPipe implements PipeTransform {

  transform(value: string, letterCase: string): string {
    if (letterCase === 'lower') {
      return value.toLowerCase() + '/bnk48';
    }
    return value.toUpperCase() + '/BNK48';
  }

}
