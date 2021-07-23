# ProjetosAngular
Esse repositório tem como objetivo guardar todos meus projetos para o aprendizado do framework Angular.


## Projeto - curso-angular
O que são módulos?</br>
<p>
Módulos são arquivos TypeScript que tem como objetivo organizar e modularizar as aplicações em Angular.
O mesmo é composto por: componentes, pipes, diretivas, outros módulos e por fim providers (). Entretanto o módulo raiz da aplicação (AppModule) possui um outro metadado bootstrap que o mesmo tem o objetivo de realizar algumas configurações iniciais para subir a aplicação.</br>
Exemplos de módulos:
</p>

```typescript
/*
Um módulo é composto por seus imports de classes TypeScript. 
Já que o angular precisa saber de onde estão vindo os arquivos que representam
os componentes, pipes, diretivas, serviços e outros módulos.
*/
import { NgModule } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { ListaCursosComponent } from './lista-cursos/lista-cursos.component';
import { DetalhesCursosComponent } from './detalhes-cursos/detalhes-cursos.component';


/*
O decorator NgModule é do framework angular e tem o objetivo de transformar uma classe TypeScript em um módulo.
O mesmo será gerenciando pelo angular. Ele possuirá os metadadados como: declarations, imports, providers, exports
bootstrap (apenas usado no AppModule), entre outros. Entretanto esses são mais utilizados.
 - declarations: Ficarão os componentes, diretivas e pipes do módulo;
 - imports: Ficarão os módulos que serão usados pelo módulo em questão;
 - providers: Ficarão os serviçõs utilizados pelo módulo;
 - exports: Ficarão os componentes, diretivas e pipes que poderão ser utilizados me outros módulos da aplicação;
*/
@NgModule({
  declarations: [
    ListaCursosComponent,
    DetalhesCursosComponent,
    TestePipe,
    TesteDirective,
  ],
  imports: [
    CommonModule // Sempre na criação de módulos, importe o CommonModule.
                 // O mesmo possui as diretivas mais comuns do angular a serem utilizadas      
  ],
  exports: [ListaCursosComponent],
  providers: [ ]
})
export class CursosModule { }
```

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CursosModule } from './cursos/cursos.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, // Nunca importe o BrowserModule em componentes próprios. 
                   // O mesmo só será utilizado no AppModule. Obs: O mesmo já possui as diretivas
                   // do angular a serem utilizadas. Eliminando a necessidade de importar o CommonModule.
                   
    CursosModule, // Tudo que estiver no metadado "exports" de CursosModule, poderá ser acessada por AppModule.
                  // Caso seja algum componente o mesmo poderá ser utilizado nos templates dos componentes de AppModule.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
</br>

<p>
 <b>O que é um componente?</b><br>
 Componentes são os artefatos que o angular utiliza para a construção da aplicação.
 O mesmo não passa de uma classe em ECMASCRIPT anotada com um decorator `@Component`, onde
 possui algumas propriedades que tem como objetivo definir arquivos de estilo, template e tag
 a ser utilizada no template de outros componentes.<br>
 
 Exemplo de componente em Angular:
 
 ```typescript
 /*
  Componentes possuem imports como qualquer outra classe em ECMASCRIPT.
  Para que o Angular possa identificar onde estão os arquivos utilizados
  na classe.
*/
import { Component, OnInit } from '@angular/core';

/*
  O decorator @Componente possui algumas propriedades.
  Dentre elas as mais importantes são:
    - selector: Tem como objetivo definir a tag do componente. 
                Para caso for usado em outro componente da aplicação
                O mesmo será referenciado pela sua tag <app-lista-cursos></app-lista-cursos>
    
    - templateUrl: Tem como objetivo referenciar o arquivo de template do componente. Onde ficará a parte
                   estrutural(html) do componente.
    
    - styleUrls: Tem como objetivo referenciar o arquivo de estilo do componente. Onde ficará a parte de CSS
                 do componente.
*/
@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css']
})
/*
  A nomenclatura para o nome do componente segue a convenção: NomeComponent
*/
export class ListaCursosComponent implements OnInit { //Todo componente deve implementar a interface OnInit (explicarei sua necessidade posteriormente)

  //Todo componente deve possuir um constructor para injeção de depedências
  constructor() { }

  //Todo componente deve possuir o método ngOnInit (explicarei sua necessidade posteriormente)
  ngOnInit(): void {
  }
}
 ```
</p>
