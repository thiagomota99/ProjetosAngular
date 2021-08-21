import { Injectable, EventEmitter } from "@angular/core";
import { LogService } from "../shared/log.service";

//O Decorator Injetable() indica que a classe é um serviço, e poderá ser instanciada, através da INJEÇÃO DE DEPENDÊNCIA
@Injectable()
export class FirstServiceService {

  /*
    Quando definimos uma propriedade ou método privado em uma classe 
    será criada apenas uma única referência da mesma.
    Ou seja, caso esta classe de serviço possua mais de uma instância esta propriedade
    será compartilhada entre elas. Assim permitindo a comunicação entre
    instâncias diferentes da classe de serviço.
  */

  static ultimoCursoCriado = new EventEmitter<string>();

  private cursos: string[] = ['Angular','Java','JavaScript'];

  //Injentando um serviço dentro de outro serviço
  constructor(private readonly logService: LogService) {
    console.log('FirstServiceService');
  }

  /*
    Porque essa abordagem não irá atualizar a lista caso eu adicione um novo curso?
    getCursos(): string[] {    
      this.copia = [...this.cursos];
      console.log(this.copia);
      return this.cursos; 
    }
    R: Acontece que quando eu chamo o método addCursos() o mesmo irá adicionar ao final
    da propriedade de array cursos uma nova posição. E consequentemente atualiza a referência em memória da propriedade.
    Em momento nenhum ele chama o método getCursos() novamente. Por isso, devolver uma cópia da propriedade não irá funcionar
    neste cenário.
  */

  //Método que a lista de cursos
  getCursos(): string[] {
    this.logService.getMessage('Retornando lista de cursos');
    return this.cursos;
  }

  //Método para adicionar um novo curso
  addCursos(curso:string): void {
    this.logService.getMessage('Criando um novo curso');
    FirstServiceService.ultimoCursoCriado.emit(curso);
    this.cursos.push(curso);    
  }

}
