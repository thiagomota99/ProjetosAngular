import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase'
})
export class CamelCasePipe implements PipeTransform {

  transform(value: string, ...args: any[]): string {
    let arrayStringPura = value.split(' ');
    let stringCamelCase = '';

    for(let stringPura of arrayStringPura) {
      stringCamelCase = `${stringCamelCase} ${this.formataString(stringPura)}`
    }
    return stringCamelCase;
  }

  private formataString(stringPura:string): string {
    return `${stringPura.substr(0,1).toUpperCase()}${stringPura.substr(1).toLowerCase()}`
  }

}
