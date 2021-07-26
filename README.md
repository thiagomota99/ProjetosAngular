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
</p></br>

<p>
 <b>O que é injeção de dependência em Angular?</b></br>
 Injeção de de depedência de forma bem pontual é eliminar a criação de instâncias de forma manual
 ou seja `public service = new Service()`. A injeção de depedência tem como objetivo criar uma instância
 automaticamente. Em Angular a Injeção de Dependência é feita através do constructor das classes. Para
 melhor exemplificar segue o exemplo abaixo:</br>
 
 ```typescript
 import { Component, OnInit } from '@angular/core';
 import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css']
})

export class ListaCursosComponent implements OnInit {

  public cursos: string[];
  /* 
    Injetando o serviço CursosService no componente. Desta forma não precisamos instanciar a classe CursosService manualmente, o angular
    ira fazer isso automaticamente.
  */
  constructor(private readonly cursosService: CursosService) { } 

  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos();
  }

}
 ```
</p><br>

<p>
<b>O que é Data Binding?</b></br>
Data Binding é a abordagem que o Angular utiliza para transitar os dados do componente (Classe ECMASCRIPT anotada com o decorator @Component) para seu respectivo template (arquivo html que representa a estrutura do componente). Entretanto podemos transitar os dados de outras duas formas. Ou seja, do template para o componente. Ou até mesmo de forma onde o template e o componente estão atualizados ao mesmo tempo.<br>
Tipos de Data Binding</br>
 1 - Interpolação: Onde podemos transitar os dados do componente para o template. Sejam eles valores de atributos ou retorno de métodos. <br>
 2 - Property Binding: Podendo também transitar os dados do componente para o template. Entretanto utilizando o atributos das tags do template
 para receberem os valores do componente.<br>
 3 - Event Binding: Onde podemos realizar o caminho contrário. Onde os dados são transmitidos do template para o componente.</br>
 4 - Two away data binding: Onde podemos realizar atualizações tanto no componente como em seu template que os dados serão atualizados dos dois arquivos ao mesmo tempo.</br>

 Exemplos abaixo:

 ```typescript
 //Classe do componente.
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  public nomeDoCurso: string = 'Angular';
  public urlDaImagem: string = 'https://i.picsum.photos/id/908/200/300.jpg?hmac=guEHon4cM5wVkD_yaCyg37gD09iEjrpqzKfo-YU-Iwc';
  public descricaoDaImagem: string = 'Descrição da imagem';
  public estiloDePropertyBinding: string[] = [
    '<img [src]="urlDaImagem" [alt]="descricaoDaImagem">',
    '<img src="{{ urlDaImagem }}" alt="{{ descricaoDaImagem }}>'
  ];
  public ArrayDeClassAndStyleBinding: string[] = [
    `<div 
      class="alert" 
      [class.alert-primary]="selectClasses.value == 'alert-primary'"
      [style.display]="selectClasses.value == 'alert-primary' ? 'block' : 'none'"
      role="alert">
    `,
    `<div 
      class="alert" 
      [class.alert-secondary]="selectClasses.value == 'alert-secondary'" 
      [style.display]="selectClasses.value == 'alert-secondary' ? 'block' : 'none'"
      role="alert">
    `,
    `<div 
      class="alert" 
      [class.alert-success]="selectClasses.value == 'alert-success'"
      [style.display]="selectClasses.value == 'alert-success' ? 'block' : 'none'" 
      role="alert">
    `,
    `<div 
      class="alert" 
      [class.alert-danger]="selectClasses.value == 'alert-danger'"
      [style.display]="selectClasses.value == 'alert-danger' ? 'block' : 'none'"
      role="alert">
    `,
    `<div 
      class="alert" 
      [class.alert-warning]="selectClasses.value == 'alert-warning'"
      [style.display]="selectClasses.value == 'alert-warning' ? 'block' : 'none'"
      role="alert">
    `,
  ];

  constructor() { }

  ngOnInit(): void {
  }

  getCurso(): string {
    return this.nomeDoCurso;
  }

}
 ```

 ```html
 <!-- Template do componente -->
<div style="margin-top: 10px;">
    <h2>Interpolação</h2>
    <p>String renderizada com a interpolação: {{ nomeDoCurso }}</p>
    <p>
        Podemos também utilizar a interpolação para resolver operações arítméticas: Soma, subtração, divisão e multiplicação <br>
        Utilização da interpolação em operações lógicas, condicionais e retornos de métodos
    </p>
    <p>Exemplos:</p>
    <ul>
        <li>Soma: 2 + 2 = {{ 2+2 }}</li>
        <li>Subtração: 2 - 2 = {{ 2-2 }}</li>
        <li>Multiplicação: 2 x 2 = {{ 2*2 }}</li>
        <li>Divisão: 2 / 2 = {{ 2/2 }}</li>
        <li>2 > 2: {{ 2>2 }}</li>
        <li>Retorno do método getCurso(): {{ getCurso() }}</li>
    </ul>
    <blockquote style="background-color: silver;">
        Obs: A interpolação também é um tipo de property binding. Entretanto é mais utilizada <br>
        quando não se não existe uma propriedade no elemento. Ou seja utilizada mais em tags que<br>
        possuem fechamento, por exemplo a tag html "p".
    </blockquote>
</div>

<div>
    <h2>Property Binding</h2>
    <p>
        Como dito acima, a interpolação é utilizada mais em tags que possuem fechamento. Agora para aquelas <br>
        que não possuem existe o propery binding.
    </p>
    <p>Exemplos</p>
    Para renderizar uma imagem podemos realizar o property binding da seguinte forma: <br>
    {{ estiloDePropertyBinding[0] }} <br>
    <img [src]="urlDaImagem" [alt]="descricaoDaImagem"> <br>
    {{ estiloDePropertyBinding[1] }} <br>
    <img src="{{ urlDaImagem }}" alt="{{ descricaoDaImagem }}">
</div>

<div>
    <h2>Class e Style binding</h2>
    <p>
        O Class e Style binding são outros tipos de property binding. Entretanto tem como objetivo manipular <br>
        o css da página. Adicionado classes ou estilos as tags. Usareei o bootstrap para exemplificar essa abordagem. <br>
    </p>
    
    <select #selectClasses (change)="0">
        <option value="">Seleciona uma Opção</option>
        <option value="alert-primary">Primário</option>
        <option value="alert-secondary">Secundário</option>
        <option value="alert-success">Sucesso</option>
        <option value="alert-danger">Erro</option>
        <option value="alert-warning">Atenção</option>
    </select>
    <br><br>
      <div 
        class="alert" 
        [class.alert-primary]="selectClasses.value == 'alert-primary'"
        [style.display]="selectClasses.value == 'alert-primary' ? 'block' : 'none'"
        role="alert">
            {{ ArrayDeClassAndStyleBinding[0] }}
      </div>
      <div 
        class="alert" 
        [class.alert-secondary]="selectClasses.value == 'alert-secondary'" 
        [style.display]="selectClasses.value == 'alert-secondary' ? 'block' : 'none'"
        role="alert">
            {{ ArrayDeClassAndStyleBinding[1] }}
      </div>
      <div 
        class="alert" 
        [class.alert-success]="selectClasses.value == 'alert-success'"
        [style.display]="selectClasses.value == 'alert-success' ? 'block' : 'none'" 
        role="alert">
            {{ ArrayDeClassAndStyleBinding[2] }}
      </div>
      <div 
        class="alert" 
        [class.alert-danger]="selectClasses.value == 'alert-danger'"
        [style.display]="selectClasses.value == 'alert-danger' ? 'block' : 'none'"
        role="alert">
            {{ ArrayDeClassAndStyleBinding[3] }}
      </div>
      <div 
      class="alert" 
      [class.alert-warning]="selectClasses.value == 'alert-warning'"
      [style.display]="selectClasses.value == 'alert-warning' ? 'block' : 'none'" 
      role="alert">
            {{ ArrayDeClassAndStyleBinding[4] }}
      </div>
</div>
 ```

 <b>Exemplos de Event Binding: </b>
 
 ```typescript
  import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  private _textoInput: string = '';
  get textoInput(): string {
    return this._textoInput;
  }
  public formasDeEventBinding: string[] = [
    `<input type="text" (keyup)="getTextoInput($event)">`,
    `<input type="text" (keyup)="getTextoInput($event.target.value)">`,
    `<input #inputV type="text" (keyup)="getTextoInput(inputV)">`,
  ];

  constructor() { }

  ngOnInit(): void {
  }

  public clickButton(): void {
    alert('Fui clicado!');
  }

  public getTextoInput(texto): void {
    this._textoInput = texto;
  }

}
 ```

 ```html
<h2>Event Binding</h2>
<p>
    O Event bindig é utilizado para escutarmos eventos realizados pelas tags no template do componente. <br>
    Aqui estão alguns exemplos de como implementa-lo: <br>

    <!-- Escutando o evento de click do botão.-->
    <button class="btn btn-primary" (click)="clickButton()">Me Clique!</button> <br>
    <label for="texto">Texto Digitado</label> <br>
    <input type="text" disabled [value]="textoInput"> <br>
    <!-- Escutando o evento onkeyup do input-->
    <input type="text" (keyup)="getTextoInput($event.target.value)">
</p>
<div>
    O evento podem ser "escutados" de várias formas. <br>
    Exemplos:
    <ul>
        <li *ngFor="let forma of formasDeEventBinding">{{ forma }}</li>
    </ul>
    <p>
        A variável $event.target.value pode ser substituído por apenas uma variável de ambiente definida no elemento hmtl <br>
        como mostrado na 3º forma.
    </p>
</div>
 ```
Exemplos de Two-way Data Binding:

```typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-data-binding',
  templateUrl: './two-way-data-binding.component.html',
  styleUrls: ['./two-way-data-binding.component.css']
})
export class TwoWayDataBindingComponent implements OnInit {

  public nome = 'Fulano';
  public idade = '33';

  constructor() { }

  ngOnInit(): void {
  }

}
```

```html
<div>
    <h2>Two-way Data Binding</h2>
    <p>
        Tem como objetivo atualizar o as informações do template e do seu respectivo componente ao mesmo tempo. <br>
        Essa abordagem é muito utilizado em formulários. Onde precisamos associar vários campos para no fim submete-los <br>
        Veja alguns exemplos agora de como implementar:
    </p>
    <p>Meu nome é {{ nome }} e tenho {{ idade }} anos de idade.</p>
    Nome: <input type="text" [(ngModel)]="nome"> Idade: <input [(ngModel)]="idade">
</div>

<div>
    <blockquote>
        Obs: Para usar a diretiva ngModel é necessário que o módulo ao qual o componente está declado, tenha em seu escopo de imports <br>
        o módulo FormsModule, pois sem isso o mesmo não irá identificar o ngModel como uma propriedade do elemento onde está sendo utilizado.
    </blockquote>
</div>
```

</p>
