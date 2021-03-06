# CursoAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.13.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

<hr>

## Anotações.
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
<hr>

<p>
  Input/Output properties <br>
  Esses dois conceitos bastante utilizados no Angular tem como o principal objetivo o reaproveitamento de componentes. <br>
  Onde é possível criar para os componentes propriedades e eventos customizados assim como as das tags html.

  Veja um exemplo de Input Property:

```typescript
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-property',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css']
})
export class InputPropertyComponent implements OnInit {

  /*
    Anotamos o atributo da classe com o decarator @Input() que nos permite
    exportar essa propriedade do component.
    O decarator pode receber um parâmetro que será o nome da propriedade exportada,
    caso não seja definido nenhum, terá o mesmo nome da propriedade do componente.
  */
  @Input('mensagem') mensagemAprensentacao = '';

  constructor() { }

  ngOnInit(): void {
  }

}
```

```html
<app-input-property [mensagem]="mensagem"></app-input-property>
```

Enquanto o Input Property tem como objetivo receber algum dado do componente pai (componente no qual possui outro em seu template) <br>
O <b>Output Property</b> faz o caminho inverso. Emite os dados para o seu componente pai. Veja o exemplo abaixo:

```typescript
import { Output } from '@angular/core';
import { Component, Input, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  @Input() valor = 0;

  /*
    Output() é o decorator que tem como objetivo exportar um evento do componente.
    Com isso podemos emitir qualquer que seja o valor para o componente pai que está
    escutando esse evento.    
  */
  @Output() valorAtual = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  public incrementar(): void {
    this.valor++;
    this.valorAtual.emit(this.valor); //O método emit da classe EventEmiiter tem como objetivo emitir de fato 
                                      //o valor do evento.
  }

  public decrementar(): void {
    this.valor--;
    this.valorAtual.emit(this.valor);
  }

}
```

```html
<contador [valor]="valor" (valorAtual)="getValor($event)"></contador>
```
</p> <hr>

<p>
  <b>Ciclo de Vida do Angular</b><br>
  Os componentes/diretivas no Angular possuem um ciclo de vida. Podem ser utilizados para momentos e tarefas específicas.<br>
  Existem 8 métodos que compõem esse ciclo de vida, sendo eles: <br>

  ngOnInit(): É executado somente uma vez, sempre na inicialização do componente/diretiva. Seja o mesmo tendo ou não input properties. Entretanto,
  caso o componente/diretiva possua input properties e as mesmas sofram atualizações na inicizalização,
  este método será executado após a execução do ngOnChanges()<br>

  ngOnChanges(): É executado sempre que existe uma atualização das inputs properties. Caso não exista ou as inputs properties não sejam alterdas
  esse método do ciclo de vida não será executado.<br>

  ngDoCheck(): É executado quando o ngOnChanges não consegue identificar as mudanças sozinho. Ou seja, de propriedades do componente/deretivas que não
  são input properties. <br>

  ngAfterContentInit(): É executado apenas uma vez após o ngDoCheck(). Depois que os dados são renderizados no template pela primeira vez, esse método é chamado. <br>

  ngAfterContentChecked(): É executado sempre após a cada execução do ngDoCheck(). É executado toda vez que após Angular renderizar os dados no template.

  ngAfterViewInit(): É executado apenas uma vez após o ngAfterContentChecked(). É executado após o Angular inicializar as viusualizações do componente e as visualizações filhas<br>

  ngAfterViewChecked(): É executado sempre após ngAfterViewInit() e todos os subsequentes ngAfterContentChecked(). Após o Angular verificar as visualizações do componente e as visualizações filhas<br>

  ngOnDestroy(): É executado imediatamente após da destruição do componente/diretiva. Tem como um dos seus principais objetivos ser o método do ciclo de vida para se desinscrever de observables, por exemplo.
</p><hr>

<p>
  <b>ViewChild()</b><br>
  Esse decorator tem como objetivo nos permitir acesso aos templates no componente. Ou seja, podemos definir uma variável no componente que será a representação de um elemento html ou elementos angular. Veja o exemplo abaixo:<br>

```typescript
  /*
    O decorator ViewChild() nos permite fazer uma associação entre do elemento hmtl ou angular que está no template do componente.
    Para que possamos acessar seus métodos e propriedades disponíveis através do componente.

    Para isso anotamos um atributo do componente com o decorator ViewChidl() que possui como argumento
    o nome da variável de local que representa o elemento html/angular no template do componente.
  */
  @ViewChild('tagP') tagP: ElementRef;

  public traduzir(): void {       
    if(this.tagP.nativeElement.textContent.split(' ')[0] === 'viewchild')
      this.tagP.nativeElement.textContent = 'Componente ViewChild operante!';
    else 
      this.tagP.nativeElement.textContent = 'viewchild works!';
  }
}
```

```html
<!-- Variável local #tagP representa o elemento html p -->
<p #tagP>viewchild works!</p>
<button class="btn btn-primary" (click)=traduzir()>Traduzir</button>
```
</p><hr>

<p>
  <b>O que são diretivas?</b><br>
  Diretivas são instruções, são componentes que não possuem template. As mesmas tem como objetivo alterar a estrutura do DOM (Diretivas Estruturais) ou interagir com os elementos dispostos no template (Diretivas de Atributos). Veja alguns exemplos de diretivas e seus tipos.<br>

```typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.css']
})
export class NgifComponent implements OnInit {
  
  public isConstruirComponente = true;
  constructor() { }

  ngOnInit(): void {
  }

  public buildOrDestroy(): void {
    this.isConstruirComponente = !this.isConstruirComponente;
  }

}
```

```html
<!-- 
    A diretiva ngIf recebe como valor uma expressão booleana. Esta diretiva é mais utilizada
    quando precisamos decidir por criar uma árvore de elementos ou não. Já que caso não seja
    necessário a construção do elementos o mesmo com ngIf não fará. Também utilizado em momentos
    que a não exibição de certos componentes/elementos seja por uma questão de segurança. Exemplo
    uma informação que só deve ser vizualida por um determinado perfil de usuário. Em casos que esses
    cenários não apareçam opte por utilizar o atributo hidden dos elementos.
-->
<p *ngIf="isConstruirComponente">O componente ngif está operante</p>
<button class="btn btn-primary" (click)="buildOrDestroy()">Hidden/Show</button>
```

<b>Diretiva ngSwitch</b>

```typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngswitch',
  templateUrl: './ngswitch-case.component.html',
  styleUrls: ['./ngswitch-case.component.css']
})
export class NgswitchCaseComponent implements OnInit {

  public aba: string = 'Home';
  
  constructor() { }

  ngOnInit(): void {
  }

}
```

```html
<!-- 
    A diretiva ngSwitch tem como objetivo representar a estrutura condicional da programação switch.
    Onde em nosso caso a mesma espera como valor uma expressão, seja o retorno de um método ou variável.
    É uma diretiva estrutural, assim como o *ngIf. Portanto tenha o mesmo cuidado ao utiliza-la.
-->
<div [ngSwitch]="aba">
    <p *ngSwitchCase="'Work'">
        a aba {{ aba }} está ativa!
    </p>
    <p *ngSwitchCase="'University'">
        a aba {{ aba }} está ativa!
    </p>
    <p *ngSwitchDefault>
        a aba {{ aba }} está ativa!
    </p>
</div>
```
<b>Diretiva ngFor</b>

```typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {

  public cursos: string[] = ['Angular','Java','MySQL'];
  
  constructor() { }

  ngOnInit(): void {
  }

}
```

```html
<!-- 
A diretiva *ngFor é uma diretiva estrutural do Angular. Onde seu objetivo é criar uma estrutura de repetição
semelhante ao for
-->
<div>
    <p>Lista de cursos</p>
    <ul>
        <li *ngFor="let curso of cursos, let i = index"> {{ i + 1 }} {{ curso }}</li>
    </ul>
</div>
```
<b>Diretiva ngClass<b>

```typescript
  import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent implements OnInit {

  public preencherLua: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  public onClick(): void {
    this.preencherLua = !this.preencherLua;
  }

}
```

```html
<p>
   A diretiva [ngClass] tem como objetivo agregar no quesito legibilidade. 
   Tem o mesmo objetivo do binding de classes, entretanto melhorando legibilidade.
</p>

<p>
    <i [ngClass]="{
        'bi bi-moon-stars' : !preencherLua,
        'bi-moon-stars-fill' : preencherLua}"
       (click)="onClick()">
    </i>
</p>

<!--
    <p>
        <i [ngClass]="{
            'bi bi-moon-stars' : !preencherLua,
            'bi-moon-stars-fill' : preencherLua}"
        (click)="onClick()">
        </i>
    </p>

    A diretiva ngClass recebe um objeto com os nomes das classes que deverão ser aplicadas
    juntamente com a expressão que vai permitir que as mesmas sejam aplicadas ao elemento html/angular.

    ngClass= {
        'nome-da-classe' : expressao
    }
-->
```
<b>Diretiva ngStyle</b>

```typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent implements OnInit {

  public ativo: boolean = false;

  constructor() { }

  ngOnInit(): void {

  }

  onClick(): void {
    this.ativo = !this.ativo;
  }

}
```

```html
<p [ngStyle]="{
    'backgroundColor': (ativo ? 'blue' : 'white'),
    'color': (ativo ? 'white' : 'black')
    }">
Utilizando a diretiva ngStyle <br>
A diretiva ngStyle é utilizada para aplicar várias propriedades em um lugar só
Diferenciado-se do StyleBinding onde para cada propriedades que queremos colocar
preciasmos de um: [style.nome-da-propriedade]. Com o ngStyle o mesmo espera um objeto onde
podemos atribuir todas as propriedades que quisermos Ex:<br>
<!--[ngStyle]="{
    'backgroundColor': (ativo ? 'blue' : 'white'),
    'color': (ativo ? 'white' : 'black')
    }"<br>-->
O primeiro parâmetro é o nome da propriedade o segundo (após o ponto e vírgula) é expressão na
qual será definido o valor que a propriedade deve assumir.
</p>

<button class="btn btn-primary" (click)="onClick()">Mudar Estilo</button>
```

<b>Operador Elvis</b><br>
O operador Elvis é uma maneira de navegar nas propriedades dos objetos. Onde caso uma propriedade
exista a possibilidade de não possuir valor (null ou undefined) o operador elvis vai nos garantir
que essa ausência de valor acarrete em erro. Veja um exemplo de como utilizar o operador:

```javascript
  public disciplina:any = {
    nome: 'Matemática',
    professor: null
  };
```

```html
<h1>Sem a utilização do operador elvis</h1>
<p>Disciplina: {{ disciplina.nome }}</p>
<p>Professor: {{ disciplina.professor != null ? disciplina.professor.nome : ''}}</p>

<h1>Utilizando Operador elvis</h1>
<p>Disciplina: {{ disciplina.nome }}</p>
<p>Professor: {{ disciplina.professor?.nome }}</p>
```

<b>Compenente ng-content<b><br>
Esse componente nativo do Angular tem como objetivo exibir o conteúdo que foi passado para o componente.
Diferentemente das Input properties a informação é passado quando o conteúdo está dentro componente. Veja o exemplo
para melhor entedimento:

```html
<!-- Template do componente <app-ng-content></app-ng-content> -->
<div>
    <h1>
        <ng-content select=".titulo"></ng-content>
    </h1>
    <p>
        <ng-content select=".explicacao"></ng-content>
    </p>
</div>

<!-- Template de outro componente qualquer -->
<app-ng-content>
    <div class="titulo">ng-content</div>
    <div class="explicacao">
        Estou passando o conteúdo diretamente dentro da tag do componente app-ng-content. 
        Não preciso mais passar através de uma Input property. Este conteúdo será reproduzido
        dentro do componente substituindo a tag ng-content. Onde o valor da propriedade "select"
        for igual ".explicacao". Enquanto a se a propriedade tiver o valor de ".titulo" irá substituir
        pelo titulo passado na div logo acima.
    </div>
</app-ng-content>
```

<b>Diretiva Personalizada</b></br>
O Angular nos possibilitar criarmos nossas próprias diretivas. Sejam elas de atributo ou estruturais.
Nesse exemplo estarei mostrando a criação de uma diretiva de atributo que muda a cor de fundo do elemento em que está sendo utilizada
para amarelo:

```typescript
import { Directive, ElementRef, Renderer2 } from '@angular/core';


/*Decorator que define que a classe será uma diretiva*/
@Directive({
  selector: 'p[fundoAmarelo]' //nome da diretiva. Caso queira definir também em quais elementos a diretiva poderá ser aplicada.
                              //No nosso caso a diretiva só será aplicada em tags <p></p>
                              //Siga a sintaxe: elemento-que-pode-ser-aplicada[nome-da-diretiva]
})
export class FundoAmareloDirective {

  //Utilizando a injeção de dependência para ter acesso ao elemento na qual
  //a diretiva está sendo utilizada.
  constructor(private _elementRef: ElementRef, private _renderer: Renderer2) {
    /*
      As duas abordagens estão corretas, entretanto uma é mais segura que a outra.
      Evitando ataques de XSS (Cross‑Site Scripting).
    */
   
    //this._elementRef.nativeElement.style.backgroundColor = 'yellow';
    this._renderer.setStyle(this._elementRef.nativeElement,'background-color','yellow');
  }

}
```

```html
<p fundoAmarelo>Testando diretiva de atributo personalizada</p>
```

<b>Conceitos de Hostlisterner e Hostbinding</b><br>
Esses conceitos são utilizados para a criação de diretivas personalizadas. Onde o Hostlistener é um decorator
que nos permite escutar eventos no elemento/componente hospedeiro da diretiva. Já o Hostbinding faz a associação
de um atributo do elemento/componente para uma variável. Exemplo abaixo:

```typescript
import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

  @Input() highColorText: string = 'red';
  @Input() defaultColorText: string = 'black'
  @Input() highLightColor: string = 'black';
  @Input() defaultColor: string = 'silver';
  /*
  O HostBinding fará a associação de qualquer atributo do elemento/componente
  para uma variável dentro da diretiva. Eleminando a necessidade de 
  injetar a dependência do ElementRef (que contém a referência do elemento/componente)
  para a manipulação de seus atributos.
  */
  @HostBinding('style.backgroundColor') public backgroundColor: string;
  
  private _color: string;
  @HostBinding('style.color') get color() {
    if(this._color === 'white') 
      return this._color = 'red';
    return this._color;
  }

  constructor() { }

  /*
  O decorator HostListener espera como parâmetro o nome do evento
  no qual ficara escutando no hospedeiro da diretiva. Quando o evento
  for disparado no hospedeiro a diretiva irá intercepta-lo e executar
  o método que foi definido para esse evento na diretiva. No caso
  o onMouseEnter() ou onMouseLeave()
  */
  @HostListener('mouseenter') onMouseEnter() {
    this._color = 'black';
    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this._color = 'white';
    this.backgroundColor = 'white';
  }

}
```

</p>
