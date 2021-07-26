import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'curso-angular';
  mensagem: string = 'Operante!';
  valor: number = 10;
  
  public getValor(valor:number): void {
    console.log(valor);
  }
}
