import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'awesome' })
/** Precede the input string with the word "Awesome " */
export class AwesomePipe implements PipeTransform {
  constructor(){
    debugger;
  }
  transform(phrase: string) {
    return phrase ? 'Awesome ' + phrase : '';
  }
}
