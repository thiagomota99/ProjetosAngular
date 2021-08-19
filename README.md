# ProjetosAngular
Esse repositório tem como objetivo guardar todos meus projetos para o aprendizado do framework Angular.

## O que são módulos?
Módulos são arquivos TypeScript que tem como objetivo organizar e modularizar as aplicações em Angular.
O mesmo é composto por: componentes, pipes, diretivas, outros módulos e por fim providers. Entretanto o módulo raiz da aplicação (AppModule) possui um outro metadado chamado bootstrap. O mesmo tem o objetivo de realizar algumas configurações iniciais para subir a aplicação. Para mais informações sobre a estrutura de um módulo, procupelo pelo arquivo `cursos.module` no projeto.

<hr>

## O que é um componente?
Componentes são os artefatos que o angular utiliza para a construção da aplicação.
O mesmo não passa de uma classe em ECMASCRIPT anotada com um decorator `@Component()`, onde
possui algumas propriedades que tem como objetivo definir arquivos de estilo, template e tag
a ser utilizada no template de outros componentes. Para mais informações sobre a estrutura de um componente
em Angular, procule pelo diretório **lista-cursos** e arquivo `lista-cursos.component.ts`.

<hr>

## Injeção de dependências em Angular
Injeção de depedência de forma bem pontual é eliminar a criação de instâncias de forma manual
ou seja `public service = new Service()`. A injeção de depedência tem como objetivo criar uma instância
automaticamente. Em Angular isso é feita através do `constructor` das classes. Para mais informações sobre
a implementação desse conceito procure pelo diretório **lista-cursos** e arquivo `lista-cursos.component.ts`.

<hr>

## O que é Data Binding?
Data Binding é a abordagem que o Angular utiliza para transitar os dados do componente **(Classe ECMASCRIPT anotada com o decorator @Component)** para seu respectivo template **(arquivo html que representa a estrutura do componente)**. Entretanto podemos transitar os dados de outras duas formas. Ou seja, do template para o componente. Ou até mesmo de forma onde o template e o componente são atualizados ao mesmo tempo.

### Tipos de Data Binding
1. Interpolação: Onde podemos transitar os dados do componente para o template. Sejam eles valores de atributos ou retorno de métodos.

2. Property Binding: Podendo também transitar os dados do componente para o template. Entretanto utilizando os atributos das tags dispostas no template
para receberem os valores dos atributos/métodos do componente.

3. Event Binding: Onde podemos realizar o caminho contrário. Onde os dados são transmitidos do template para o componente.

4. Two way data binding: Onde podemos realizar atualizações tanto no componente como em seu template que os dados serão atualizados nos dois arquivos ao mesmo tempo.

> Para melhor entendimento dos tipos de Data Binding procure pelo diretório data-binding. 
> Dentro dele estão subdiretórios com os componentes exemplificando as 4 abordagens.

<hr>

## Input/Output Properties
Esses dois conceitos bastante utilizados no Angular tem como o principal objetivo o reaproveitamento de componentes.
Onde é possível criar para os componentes propriedades e eventos customizados assim como as das tags html. Para mais detalhes
de como implementar esses conceito procure pelo diretório `input-and-output-properties\input-property` e `input-and-output-properties\output-property`

<hr>

## Ciclo de Vida do Angular
Os componentes/diretivas no Angular possuem um ciclo de vida. Podem ser utilizados para momentos e tarefas específicas.
Existem 8 métodos que compõem esse ciclo de vida, sendo eles:

* ngOnInit(): É executado somente uma vez, sempre na inicialização do componente/diretiva. Seja o mesmo tendo ou não input properties. Entretanto,
caso o componente/diretiva possua input properties e as mesmas sofram atualizações na inicizalização,
este método será executado após a execução do `ngOnChanges()`<br>

* ngOnChanges(): É executado sempre que existe uma atualização das inputs properties. Caso não exista ou as inputs properties não sejam alterdas
esse método do ciclo de vida não será executado.<br>

* ngDoCheck(): É executado quando o `ngOnChanges()` não consegue identificar as mudanças sozinho. Ou seja, de propriedades do componente/deretivas que não
são input properties. <br>

* ngAfterContentInit(): É executado apenas uma vez após o `ngDoCheck()`. Depois que os dados são renderizados no template pela primeira vez, esse método é chamado. <br>

* ngAfterContentChecked(): É executado sempre após a cada execução do `ngDoCheck()`. É executado toda vez que após Angular renderizar os dados no template.

* ngAfterViewInit(): É executado apenas uma vez após o `ngAfterContentChecked()`. É executado após o Angular inicializar as viusualizações do componente e as visualizações filhas<br>

* ngAfterViewChecked(): É executado sempre após `ngAfterViewInit()` e todos os subsequentes `ngAfterContentChecked()`. Após o Angular verificar as visualizações do componente e as visualizações filhas<br>

* ngOnDestroy(): É executado imediatamente após da destruição do componente/diretiva. Tem como um dos seus principais objetivos ser o método do ciclo de vida para se desinscrever de observables, por exemplo.

<hr>

## O que são Diretivas?
Diretivas são instruções, componentes que não possuem template. As mesmas tem como objetivo alterar a estrutura do DOM (Diretivas Estruturais) ou interagir com os elementos dispostos no template (Diretivas de Atributos). Para mais detalhes de como implementar o conceito de Diretivas, procure pelo diretório `diretivas`.

<hr>

## O que são Serviços?
Serviços em Angular são classes que tem como objetivo conter a regra de negócio da aplicação. Ela que possui também o conhcimento para buscar os dados e fornecer para ao sistema. Por fim podem ser entidades que fornce métodos utilizados por todoa aplicação. Como a formatação de dados para um formato específcio, antes mesmo de serem exibidos. Para mais detalhes e exemplos de como aplicar este conceito no Angular, procure pelo no projeto pelo diretório `servicos`.

<hr>

## Tabela de decorators Angular

Decorator   | Objetivo
---------   | --------
Input()     | Tem como objetivo expor o atributo do componente para receber valores externos
Output()    | Tem como objetivo expor eventos do componentes para serem recebidos por componentes externos
Viewchild() | Permitir acesso aos templates dos componentes. Ou seja, podemos definir um atributo no componente que será a representação de um elemento html/angular.

