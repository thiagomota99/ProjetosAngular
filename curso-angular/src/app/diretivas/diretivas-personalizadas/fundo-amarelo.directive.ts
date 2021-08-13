import { Directive, ElementRef, Renderer2 } from '@angular/core';


/*Decorator que define que a classe será uma diretiva*/
@Directive({
  selector: 'p[fundoAmarelo]' //nome da diretiva. Caso queira definir também em quais elementos a diretiva poderá ser aplicada.
                              //No nosso caso a diretiva só será aplicada em tags <p></p>
                              //Siga a sintaxe: elemento-que-pode-ser-aplicada[nome-da-diretiva]
})
export class FundoAmareloDirective {

  //Utilizando a injeção de dependência para ter acesso ao elemento na qual
  //a diretiva está sendo utilizada.
  constructor(private _elementRef: ElementRef, private _renderer: Renderer2) {
    /*
      As duas abordagens estão corretas, entretanto uma é mais segura que a outra.
      Evitando ataques de XSS (Cross‑Site Scripting).
    */
   
    //this._elementRef.nativeElement.style.backgroundColor = 'yellow';
    this._renderer.setStyle(this._elementRef.nativeElement,'background-color','yellow');
  }

}
