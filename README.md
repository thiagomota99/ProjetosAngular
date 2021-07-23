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
