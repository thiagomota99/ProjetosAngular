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