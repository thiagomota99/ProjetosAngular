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
  exibirConteudo: boolean = false;

  public getValor(valor:number): void {
    console.log(valor);
  }

  public onClick() {
    this.exibirConteudo = !this.exibirConteudo;
  }
}
