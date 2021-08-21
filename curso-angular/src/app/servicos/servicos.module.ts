import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarCursosComponent } from './consumidores-do-servico/listar-cursos/listar-cursos.component';
import { CriarCursosComponent } from './consumidores-do-servico/criar-cursos/criar-cursos.component';
import { FirstServiceService } from './first-service.service';
import { UltimoCursoCriadoComponent } from './consumidores-do-servico/ultimo-curso-criado/ultimo-curso-criado.component';



@NgModule({
  declarations: [
    ListarCursosComponent,
    CriarCursosComponent,
    UltimoCursoCriadoComponent,
  ],
  exports: [
    ListarCursosComponent,
    CriarCursosComponent,
    UltimoCursoCriadoComponent,
  ],
  imports: [
    CommonModule
  ],
  //O meta-dado providers tem como objetivo prover o serviço(s) (no caso, FirstServiceService) para os componentes do módulo (ListaCursosComponent e CriarCursosComponent)
  //Caso o serviço esteja declarado no módulo root da aplicação (AppModule). Todos os módulos da aplicação terá acesso ao serviço. Eliminando a necessidade de declara-lo aqui
  //ou em qualquer outro módulo que se deseja utilizar o serviço.

  /*
    Faça os seguintes experimentos:
      1 - Comente o meta-dado providers deste módulo
      2 - Vá até o AppModule e declare o provider da seguinte forma:
        providers: [
          FirstServiceService
        ]
      3 - Execute o projeto e veja que o serviço continuára funcionando

      Outro experimento...
      1 - Descomente o provider deste módulo e comente o de AppModule
      2 - Faça a injeção de dependência do serviço FirstServiceService em outro componente não declaro neste módulo.
      3 - Tente utilizar algum método do serviço no componente nesse outro componente
      4 - Execute o projeto e veja que acarretara em um erro

      Último experimento...
        Quando utilizamos serviços de forma a seguir Padrão Singleton que é definido por utilizar apenas uma instância do serviço
        para toda a aplicação. Colocaremos a declaração do serviço nos módulos. Agora, caso desejado. Pode-se ter várias instância de um único serviço
        adotando a seguinte abordagem.

      1 - Retire a declaração do serviço do metadado 'providers' e remova sua importação na classe.
      2 - Vá até a classe dos componentes ListarCursosComponent e CriarCursosComponent
      3 - Entre as propriedades do decorator @Component, adiciona mais uma: providers.
      4 - Declare o serviço dentro da propriedade providers da seguinte forma:
        @Component({
          selector: 'criar-cursos',
          templateUrl: './criar-cursos.component.html',
          styleUrls: ['./criar-cursos.component.css'],
          providers: [
            FirstServiceService
          ]
        })
        @Component({
          selector: 'listar-cursos',
          templateUrl: './listar-cursos.component.html',
          styleUrls: ['./listar-cursos.component.css'],
          providers: [
            FirstServiceService
          ]
        })      
      
      5 - Adicione um novo curso e veja o que acontece com a lista de cursos.
      
      As listas não estão iguais, isso acontece porque agora existem duas instancias do serviço FirstServiceService.
      Portanto caso queira utilizar uma instância individual do serviço para cada componente, utilize essa abordagem.
            
  */
  providers: [
    FirstServiceService
  ]
})
export class ServicosModule { }
