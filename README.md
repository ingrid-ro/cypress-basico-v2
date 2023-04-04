# Description

Sample project for the basic course of the Talking About Testing online.

## Pre-requirements

It is required to have Node.js and npm installed to run this project.

> I used versions `v16.0.0` and `7.10.0` of Node.js and npm, respectively. I suggest you use the same or later versions.

To check the versions, open the terminal and run
```
node -v
```
and run
```
npm --v
```

## Installation

1. Cloning the repository

Clone the repository on the machine to develop and view the tests.
```
git clone https://github.com/ingrid-ro/cypress-basico-v2.git
```
2. Installing packages

After cloned, to install the dev dependencies, run
```
npm install
```
or for the short version, run
```
npm i
```
3. Running the Cypress

After installing all the packages correctly, run the cypress interface using

```
npm run cy:open
```

## Tests

You can run the tests simulating a desktop or mobile viewport.

### Desktop

To run the test in headless mode on a desktop viewport, run 
```
npm test
```
or for the short version, run
```
npm t
```
Or to open Cypress in interactive mode on a desktop viewport, run 
```
npm run cy:open
```

### Mobile

To run the test in headless mode on a mobile viewport, run 
```
npm run test:mobile
```
Or to open Cypress in interactive mode on a mobile viewport, run 
```
npm run cy:open:mobile
```
## Folders

- ### Fixtures

Inside the *fixtures* folder, the `.json` files containing hidden data that will be used in the tests are inserted.

- ### Integration

In the *integration* folder, all the `.spec.js` containing the scenarios to be tested are inserted.

- ### Plugins

The *plugins* folder contains all the `.js` used to write the custom code that runs during the Cypress lifecycle stages.

- ### Snapshots

Inside the *snapshots* folder, which is outside of versioning, Cypress inserts all screenshots when it fails to run.

- ### Support

In the *support* folder, all the `.js` used to create global settings/behaviors that modify Cypress are placed.

- ### .gitignore

File that allows ignoring folders and other files in versioning.

- ### cypress.json

It's a Cypress configuration file.

---
## *Em Português 🇧🇷:*

# Descrição

Exemplo de projeto para o curso básico do Talking About Testing online.

## Pré-requisitos

É necessário ter Node.js e npm instalados para executar este projeto.

> Usei as versões `v16.0.0` e `7.10.0` de Node.js e npm, respectivamente. Sugiro que você use as versões iguais ou posteriores.

Para verificar as versões, abra o terminal e execute o comando
```
node -v
```
e execute também o comando
```
npm --v
```

## Instalação

1. Clonando o repositório

Clone o repositório na máquina para desenvolver e visualizar os testes.
```
git clone https://github.com/ingrid-ro/cypress-basico-v2.git
```
2. Instalando os pacotes

Após clonado, para instalar as dependências dev, execute
```
npm install
```
ou para a execução da versão curta, execute
```
npm i
```
3. Executando o Cypress

Depois de instalar todos os pacotes corretamente, execute a interface cypress usando
```
npm run cy:open
```

## Testes

Você pode executar os testes simulando uma viewport `desktop` ou `mobile`.

### Desktop

Para executar o teste no modo headless no desktop, execute
```
npm test
```
ou para a versão curta, execute
```
npm t
```
Ou para abrir o Cypress no modo interativo no desktop, execute
```
npm run cy:open
```

### Mobile

Para executar o teste no modo headless no mobile, execute
```
npm run test:mobile
```
Ou para abrir o Cypress no modo interativo no moobile, execute
```
npm run cy:open:mobile
```

## Pastas

- ### Fixtures

Dentro da pasta *fixtures*, são inseridos os os `.json` que contenham dados ocultos e que serão usados nos testes.

- ### Integration

Na pasta *integration*, são inseridos todos os `.spec.js`que contenham os cenários que serão testados.

- ### Plugins

A pasta *plugins*, contém todos os `.js` usados para escrever o código personalizado que é executado durante os estágios do ciclo de vida do Cypress.

- ### Snapshots

Dentro da pasta *snapshots*, que fica fora do versionamento, o Cypress insere todas as imagens printadas quando há uma falha na execução.

- ### Support

Na pasta *support*, são inseridos todos os `.js` usados para criar configurações/comportamentos globais que modificam o Cypress.

- ### .gitignore

Arquivo que permite ignorar pastas e outros arquivos no versionamento.

- ### cypress.json

É um arquivo para configuração do Cypress.

## Links uteis

- [Documentação do Cypress](https://docs.cypress.io/guides/overview/why-cypress)

___
Este projeto foi criado por [Walmyr](https://walmyr.dev).

A tradução do documento foi feita por mim [Ingrid](https://github.com/ingrid-ro).
