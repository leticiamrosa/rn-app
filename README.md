# RN Jokes

_Repositório_ contendo uma simples navegação e listagem em react-native


# Setup

Para rodar esse projeto em `react-native` é preciso antes ter o ambiente de configuração de desenvolvimento p/ esse ecossistema. 
Caso precise configurar o ambiente basta seguir as [instruções de instalação](https://reactnative.dev/docs/environment-setup) do `react-native` para cada plataforma (android/iOs), **certifique-se de instalar todas as dependencias para rodar o `react-native` em sua maquina.** 
* [Guia de instalação ambiente](https://reactnative.dev/docs/environment-setup)

Para rodar esse projeto é preciso estar usando a versão do `node 14+`

**Para instalar as dependencias**

    yarn

**Para instalar as dependencias (pods) do iOs**

    cd ios && pod install && cd ..
**Para instalar as dependencias (pods) do iOs no Macbook M1**

    cd ios && arch -x86_64 pod install && cd ..
 
 
 ## Rodando o projeto no simulador
**Para rodar no simulador do iOs**

    yarn ios

**Para rodar no simulador do Android**

    yarn android

**Para rodar o bundle**

    yarn start

 



## Criação de arquivos e estrutura

A estrutura do projeto foi segmentada de uma maneira que caso seja necessario remover o `react-native` e utilizar uma outra lib/framework fique mais facil de entender. Separando da seguinte forma:
* **native**: apenas o componente visual, é composto por `react-native` e não deve ter regra de negocio a não ser UI
* **container**: é o responsavel pela regra de negocio, chama a camada de request e direcionada o tratamento de fluxo de acordo com o comportamento da chamada. Exemplo receber dados de um api, caso de erro deve fazer o redirect para uma tela de erro e assim por diante. Ele não tem a responsabilidade de tratativa dos dados.
* **screen**: é o responsavel pela screen, ele que sera chamado no documento de Stack e sua responsabilidade é apenas lidar com dominio de screen, exemplo header e informações de navegação nesse momento apenas

Foi criado hooks para lidar com as chamadas de api e tratar os dados, mas podemos usar a imaginação e abstrair ainda mais com repositories, services e afins para deixar essa camada de trativada e recebimentos dos dados melhor. Nesse momento o hook está fazendo a chamada e retornando as informações

Foi criado um contexto que ira chamar esse hook e vai ser o responsavel por repassar o hook, dentro do hook está o service que é um factory da api.

## Screen Shots

