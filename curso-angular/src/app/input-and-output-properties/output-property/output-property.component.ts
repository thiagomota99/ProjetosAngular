import { Output } from '@angular/core';
import { Component, Input, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  @Input() valor = 0;

  /*
    Output() é o decorator que tem como objetivo exportar um evento do componente.
    Com isso podemos emitir qualquer que seja o valor para o componente pai que está
    escutando esse evento.    
  */
  @Output() valorAtual = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  public incrementar(): void {
    this.valor++;
    this.valorAtual.emit(this.valor); //O método emit da classe EventEmiiter tem como objetivo emitir de fato 
    //o valor do evento.
  }

  public decrementar(): void {
    this.valor--;
    this.valorAtual.emit(this.valor);
  }

}
