import { Injectable } from "@angular/core";

//O Decorator Injetable() indica que a classe é um serviço, e poderá ser instanciada, através da INJEÇÃO DE DEPENDÊNCIA
@Injectable()
export class FirstServiceService {

  private cursos: string[] = ['Angular','Java','JavaScript'];
  
  constructor() { }

  //Método que a lista de cursos
  getCursos(): string[] {
    return this.cursos; 
  }

  //Método para adicionar um novo curso
  addCursos(curso:string): void { 
    this.cursos.push(curso);
  }

}
