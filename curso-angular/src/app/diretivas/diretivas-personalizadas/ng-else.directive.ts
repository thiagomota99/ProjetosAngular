/*
  Exemplo de diretiva estrutural personalizada.
  Crição de diretiva estrutural que representa a estrutura condicional 'else'.
*/

import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[NgElse]'
})
export class NgElseDirective {

  /*
    Criando uma input property que tem como objetivo pegar o valor booleano passado a ela e verificar
    se o mesmo é false. Caso seja, utilizando a injeção de dependência das classe ViewContainerRef
    e TemplateRef reproduziremos o contéudo do componente/elemento em que a diretiva ngElse está sendo
    utilizada.
  */
  @Input() set ngElse(condition:boolean) {
    //Verifica se o valor é false
    if(!condition)
      //Vai rendenrizar o conteúdo dentro da tag template.
      this._viewContainerRef.createEmbeddedView(this._templateRef);
    else
      //Destrói o elemento dentro da tag template. 
      this._viewContainerRef.clear();
  }

  /*
    TemplateRef: Como o nome sugere, faz referência a tag <template></template>
    ViewContainerRef: Faz referência ao conteúdo que queremos representar dentro do template.
  */
  constructor(private _viewContainerRef: ViewContainerRef, private _templateRef: TemplateRef<any> ) { }

}
