import { Component, OnInit } from '@angular/core';
import { FirstServiceService } from '../../first-service.service';

@Component({
  selector: 'listar-cursos',
  templateUrl: './listar-cursos.component.html',
  styleUrls: ['./listar-cursos.component.css'],
})
export class ListarCursosComponent implements OnInit {

  public cursos: string[] = [];

  //Injentando a classe de serviço FirstService
  constructor(private firstService: FirstServiceService) { }

  ngOnInit(): void {
    //Pegando o array de cusrsos do serviço e atribuindo ao atributo do componente.
    this.cursos = this.firstService.getCursos();
  }


}
