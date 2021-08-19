import { Component, OnInit } from '@angular/core';
import { FirstServiceService } from '../../first-service.service';

@Component({
  selector: 'listar-cursos',
  templateUrl: './listar-cursos.component.html',
  styleUrls: ['./listar-cursos.component.css'],
  providers: [
    FirstServiceService
  ]
})
export class ListarCursosComponent implements OnInit {

  public cursos: string[] = [];

  //Injentando a classe de serviço FirstService
  constructor(private firstService: FirstServiceService) { }

  ngOnInit(): void {
    this.cursos = this.firstService.getCursos();
  }


}
