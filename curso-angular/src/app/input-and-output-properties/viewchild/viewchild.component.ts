import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-viewchild',
  templateUrl: './viewchild.component.html',
  styleUrls: ['./viewchild.component.css']
})
export class ViewchildComponent implements OnInit {

  /*
    O decorator ViewChild() nos permite fazer uma associação entre do elemento hmtl ou angular que está no template do componente.
    Para que possamos acessar seus métodos e propriedades disponíveis através do componente.

    Para isso anotamos um atributo do componente com o decorator ViewChidl() que possui como argumento
    o nome da variável de local que representa o elemento html/angular no template do componente.
  */
  @ViewChild('tagP') tagP: ElementRef;

  constructor() { }

  ngOnInit(): void {
    
  }
  
  public traduzir(): void {       
    if(this.tagP.nativeElement.textContent.split(' ')[0] === 'viewchild')
      this.tagP.nativeElement.textContent = 'Componente ViewChild operante!';
    else 
      this.tagP.nativeElement.textContent = 'viewchild works!';
  }


}
