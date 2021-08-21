import { Injectable } from '@angular/core';

@Injectable()
export class LogService {

  constructor() { }

  public getMessage(mensagem:string): void {
    console.log(mensagem);
  }
}
