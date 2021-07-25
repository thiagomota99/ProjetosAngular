import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  public nomeDoCurso: string = 'Angular';
  public urlDaImagem: string = 'https://i.picsum.photos/id/908/200/300.jpg?hmac=guEHon4cM5wVkD_yaCyg37gD09iEjrpqzKfo-YU-Iwc';
  public descricaoDaImagem: string = 'Descrição da imagem';
  public estiloDePropertyBinding: string[] = [
    '<img [src]="urlDaImagem" [alt]="descricaoDaImagem">',
    '<img src="{{ urlDaImagem }}" alt="{{ descricaoDaImagem }}>'
  ]

  constructor() { }

  ngOnInit(): void {
  }

  getCurso(): string {
    return this.nomeDoCurso;
  }

}
