import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operador-elvis',
  templateUrl: './operador-elvis.component.html',
  styleUrls: ['./operador-elvis.component.css']
})
export class OperadorElvisComponent implements OnInit {

  public disciplina:any = {
    nome: 'Matemática',
    professor: null
  };

  constructor() { }

  ngOnInit(): void {
  }

}
