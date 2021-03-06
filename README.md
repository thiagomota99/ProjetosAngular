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
Serviços em Angular são classes que tem como objetivo conter a regra de negócio da aplicação. Ela que possui também o conhcimento para buscar os dados e fornecer para ao sistema. Por fim, podem ser entidades que fornecem métodos utilizados por todoa aplicação. Como a formatação de dados para um formato específcio, antes mesmo de serem exibidos. Para a utilização dos serviços podemos utiliza-los aplicando dois padrões: o **Singleton** ou **várias instâncias**. Explicando os padrões abaixo:

* Padrão Singleton: É o padrão onde utilizamos apenas uma instância do serviço para toda a aplicação. Ou seja, os componentes A,B,C,D...N compartilharão a instância desse serviço. Portanto, as propriedades do serviço que sofrerem alguma alteração. Esta alteração será refletida em outros componentes que por ventura estejam fazendo uso dessa propriedade. 

> Para um exemplo prático desse padrão, procure pelo diretório `src\app\servicos\consumidores-do-servico` lá irá encontrar os componentes `criar-cursos` e `listar-cursos`.
> descomente as linhas **31** e **33** no arquivo `app.component.html` e execute o projeto.

* Várias intâncias: É o padrão onde utilizamos várias instâncias do serviço. Ou seja, os componentes A,B,C,D...N possuem cada um sua própria instância, por consequência qualquer alteração de propriedade(s) em uma dessas instâncias, não será refletido nas outras. Já que são referências em memória distintas de um mesmo serviço.

> Para um exemplo prático desse padrão, procure pelo diretório `src\app\servicos\consumidores-do-servico` lá irá encontrar o componente `ultimo-curso-criado`. Analise o código, 
> descomente as linhas **31** ao **33** no arquivo `app.component.html` e execute o projeto.

### Escopo de Serviços
Escopo     | Exemplos
-----------| --------
Global     | Declare o serviço na propriedade `providers` no módulo de entrada da aplicação `AppModule` Ex: `providers: [NomeDoServicoService]`. Assim todos os módulos e seus respectivos componentes terão acesso a instância do serviço.
Módulo     | Declare o serviço na propriedade `providers` apenas no módulo onde o mesmo será utilizado. Todos os componentes daquele módulo compartilharão a mesma instância do serviço.
Componente | Declare o serviço na propriedade `providers` no decorator `@Component` do seu componente. O componente terá uma instância do serviço e todos seus componentes filhos compartilharão da mesma instância. Ex: procure no projeto pelo arquivo `ultimo-curso-criado.component.ts`


> **Caso queira utilizar o padrão de várias intâncias e em algum momento queira emitir os valores de uma para outra. Utilize propriedades /e/ou métodos estáticos. Os mesmos**
> **serão compartilhados por todas as intâncias do serviço**.

<hr>

## Pipes
São classes que transforma um ou mais valores para exibição desse(s) valor(es) transformados no template do componente.

Pipes         | Objetivo
------------- | ----------
uppercase     | Transforma a string em letras maiúsculas
lowercase     | Transforma a string em letras minúsculas
json          | Transforma o objeto para o formato json
number        | Transforma o valor para numérico. Podemos passar alguns argumentos para esse pipe como número máximo de casas decimais Ex: `{{ numero | number:'1.1-2'}}`
currency      | Transforma o valor para formato da moeda desejada: Real, dólar, euro... Ex: `{{ moeda | currency:'BRL' }}`
date          | Transforma a data para o formato desejado Ex: `{{ data | date:'dd-MM-yyyy'}}`
async         | Tem como objetivo exibir valores assíncronos no template assim que os mesmos chegarem para o atributo/metodo da classe do componente.

Para mais detalhes de como implementar os pipes acima... procure pelo diretório `src\app\pipes\exemplos-pipes` ou acesso o site <https://angular.io/api/common#pipes>

### Pipes puros e impuros
* Puro: Um pipe puro ele não verifica as modificações do argumento "values" passado para o método `transform()`. Consequentemente, caso o argumento sofra alguma alteração o pipe não ficará sabendo dessa modificação. Para exemplo prático, procure pelo diretório `src\app\pipes\exemplos-pipes`

* Impuro: É o contrário do comportamento do pipe puro.

>Obs: Os pipes que foram criados para exemplificar os conceitos de Pipes puros e impuros são meramente exemplos.
>**NÃO UTILIZE DE FORMA ALGUMA PIPES PARA ORDENAÇÃO OU FILTRO DE ARRAYS** faça isso utilizando métodos dentro da própria classe do componente.

<hr>

## Tabela de decorators Angular

Decorator   | Objetivo
---------   | --------
Input()     | Tem como objetivo expor o atributo do componente para receber valores externos
Output()    | Tem como objetivo expor eventos do componentes para serem recebidos por componentes externos
Viewchild() | Permitir acesso aos templates dos componentes. Ou seja, podemos definir um atributo no componente que será a representação de um elemento html/angular.

