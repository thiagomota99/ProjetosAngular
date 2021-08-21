import { Component, OnInit } from '@angular/core';
import { FirstServiceService } from '../../first-service.service';

@Component({
  selector: 'ultimo-curso-criado',
  templateUrl: './ultimo-curso-criado.component.html',
  styleUrls: ['./ultimo-curso-criado.component.css'],
  providers:[FirstServiceService]
})
export class UltimoCursoCriadoComponent implements OnInit {

  private _curso: string;
  get curso(): string {
    return this._curso;
  }
  
  private _cursos: string[] = [];
  get cursos(): string[] {
    return this._cursos;
  }

  constructor(private readonly firstService: FirstServiceService) { }

  ngOnInit(): void {
    this._cursos = this.firstService.getCursos();
    FirstServiceService.ultimoCursoCriado.subscribe(ultimoCursoCriado => this._curso = ultimoCursoCriado);
  }

}
