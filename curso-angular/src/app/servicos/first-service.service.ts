import { Injectable, EventEmitter } from "@angular/core";

//O Decorator Injetable() indica que a classe é um serviço, e poderá ser instanciada, através da INJEÇÃO DE DEPENDÊNCIA
@Injectable()
export class FirstServiceService {

  /*
    Quando definimos uma propriedade ou método privado em uma classe 
    será criada apenas uma única referência da mesma.
    Ou seja, caso esta classe de serviço possua duas intâncias esta propriedade
    será compartilhada entre as instâncias. Assim permitindo a comunicação entre
    instâncias diferentes da classe de serviço.
    
    Faça o experimento:
      Crie dois componentes quaisquer e para cada um crie uma instância deste serviço
      Em um dos componentes
        crie um curso e busque a lista de cursos
      
      No outro
        busque a lista de cursos
      
      Veja que a lista de cursos dos dois componentes estão diferentes, pois os mesmos possuem
      instâncias diferentes do serviço.

      Agora descomente a linha 41, vá até o ngOnit do componente que está com a lista desatualizada e coloque o seguinte código:
        FirstServiceService.ultimoCursoCriado.subscribe(ultimoCurso => {
          -- adicione ao array da lista o curso recebido "ultimoCurso" --
        });
        
      Pronto. Agora você possui duas instâncias de serviços diferentes, porém que conseguem se comunicar atráves da Emissão de Eventos (EventEmitter)
  */
  static ultimoCursoCriado = new EventEmitter<string>();

  private cursos: string[] = ['Angular','Java','JavaScript'];
  
  constructor() { }

  //Método que a lista de cursos
  getCursos(): string[] {
    return this.cursos; 
  }

  //Método para adicionar um novo curso
  addCursos(curso:string): void { 
    this.cursos.push(curso);
    //FirstServiceService.ultimoCursoCriado.emit(curso);
  }

}
