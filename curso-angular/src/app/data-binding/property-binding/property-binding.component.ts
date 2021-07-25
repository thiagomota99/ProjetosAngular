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
  ];
  public ArrayDeClassAndStyleBinding: string[] = [
    `<div 
      class="alert" 
      [class.alert-primary]="selectClasses.value == 'alert-primary'"
      [style.display]="selectClasses.value == 'alert-primary' ? 'block' : 'none'"
      role="alert">
    `,
    `<div 
      class="alert" 
      [class.alert-secondary]="selectClasses.value == 'alert-secondary'" 
      [style.display]="selectClasses.value == 'alert-secondary' ? 'block' : 'none'"
      role="alert">
    `,
    `<div 
      class="alert" 
      [class.alert-success]="selectClasses.value == 'alert-success'"
      [style.display]="selectClasses.value == 'alert-success' ? 'block' : 'none'" 
      role="alert">
    `,
    `<div 
      class="alert" 
      [class.alert-danger]="selectClasses.value == 'alert-danger'"
      [style.display]="selectClasses.value == 'alert-danger' ? 'block' : 'none'"
      role="alert">
    `,
    `<div 
      class="alert" 
      [class.alert-warning]="selectClasses.value == 'alert-warning'"
      [style.display]="selectClasses.value == 'alert-warning' ? 'block' : 'none'"
      role="alert">
    `,
  ];

  constructor() { }

  ngOnInit(): void {
  }

  getCurso(): string {
    return this.nomeDoCurso;
  }

}
