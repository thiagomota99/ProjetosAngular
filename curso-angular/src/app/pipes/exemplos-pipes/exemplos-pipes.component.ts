import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {

  livro: any = {
    titulo: 'Learning JavaScript Data Structures and Algorithms Capa comum – Ilustrado, 28 outubro 2014',
    rating: 4.32418,
    numeroPaginas: 314,
    preco: 44.99,
    dataLancamento: new Date(2016,5,23),
    url: 'https://www.amazon.com.br/Learning-JavaScript-Data-Structures-Algorithms/dp/1783554878'
  };

  cursos: string[] = ['Java','Angular','Python'];
  
  filtro: string;

  constructor() { }

  ngOnInit(): void {
  }

  addCurso(valor: string): void {
    this.cursos.push(valor);
  }

  
  obterCursos(): string[] {
    if(this.cursos.length === 0 || this.filtro === undefined)
      return this.cursos;
    else
      return this.cursos.filter(curso => curso.indexOf(this.filtro.toLowerCase()) >= 0);
  }

}
