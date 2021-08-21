import { Component, OnInit } from '@angular/core';
import { FirstServiceService } from '../../first-service.service';

@Component({
  selector: 'criar-cursos',
  templateUrl: './criar-cursos.component.html',
  styleUrls: ['./criar-cursos.component.css'],
})
export class CriarCursosComponent implements OnInit {

  public cursos: string [] = [];

  //Injentando a classe de serviço FirstService
  constructor(private firstService: FirstServiceService) { }

  ngOnInit(): void {
    //Pegando o array de cusrsos do serviço e atribuindo ao atributo do componente.
    this.cursos = this.firstService.getCursos();
  }

  public onAdicionar(curso:string): void {
    //Método do serviço para adicionar um novo curso ao array de cursos.
    this.firstService.addCursos(curso);
  }

}
