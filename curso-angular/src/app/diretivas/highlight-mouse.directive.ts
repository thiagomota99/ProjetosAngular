import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

  /*
  O HostBinding fará a associação de qualquer atributo do elemento/componente
  para uma variável dentro da diretiva. Eleminando a necessidade de 
  injetar a dependência do ElementRef (que contém a referência do elemento/componente)
  para a manipulação de seus atributos.
  */
  @HostBinding('style.backgroundColor') public backgroundColor: string;
  
  private _color: string;
  @HostBinding('style.color') get color() {
    if(this._color === 'white') 
      return this._color = 'red';
    return this._color;
  }

  constructor() { }

  /*
  O decorator HostListener espera como parâmetro o nome do evento
  no qual ficara escutando no hospedeiro da diretiva. Quando o evento
  for disparado no hospedeiro a diretiva irá intercepta-lo e executar
  o método que foi definido para esse evento na diretiva. No caso
  o onMouseEnter() ou onMouseLeave()
  */
  @HostListener('mouseenter') onMouseEnter() {
    this._color = 'black';
    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this._color = 'white';
    this.backgroundColor = 'white';
  }

}
