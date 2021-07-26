import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  private _textoInput: string = '';
  get textoInput(): string {
    return this._textoInput;
  }
  public formasDeEventBinding: string[] = [
    `<input type="text" (keyup)="getTextoInput($event)">`,
    `<input type="text" (keyup)="getTextoInput($event.target.value)">`,
    `<input #inputV type="text" (keyup)="getTextoInput(inputV)">`,
  ];

  constructor() { }

  ngOnInit(): void {
  }

  public clickButton(): void {
    alert('Fui clicado!');
  }

  public getTextoInput(texto): void {
    this._textoInput = texto;
  }

}
