import { Component, OnInit } from '@angular/core';
import { FirstServiceService } from '../../first-service.service';

@Component({
  selector: 'criar-cursos',
  templateUrl: './criar-cursos.component.html',
  styleUrls: ['./criar-cursos.component.css'],
  providers: [
    FirstServiceService
  ]
})
export class CriarCursosComponent implements OnInit {

  public cursos: string [] = [];

  //Injentando a classe de serviço FirstService
  constructor(private firstService: FirstServiceService) { }

  ngOnInit(): void {
    this.cursos = this.firstService.getCursos();
  }

  public onAdicionar(curso:string): void {
    this.firstService.addCursos(curso);
  }

}
