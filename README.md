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