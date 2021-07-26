import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-property',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css']
})
export class InputPropertyComponent implements OnInit {

  /*
    Anotamos o atributo da classe com o decarator @Input() que nos permite
    exportar essa propriedade do component.
    O decarator pode receber um parâmetro que será o nome da propriedade exportada,
    caso não seja definido nenhum, terá o mesmo nome da propriedade do componente.
  */
  @Input('mensagem') mensagemAprensentacao = '';

  constructor() { }

  ngOnInit(): void {
  }

}
