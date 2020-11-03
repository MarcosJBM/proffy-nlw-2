<h1 align="center">
    <img alt="" src=".github/logo.svg" height="100px" />
    <br>Next Level Week #2<br/>
    Node.js | ReactJS | React Native
</h1>

<p align="center">
    <a href="#sobre">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#tecnologias">Tecnologias Utilizadas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#web">Versão Web</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#mobile">Versão Mobile</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#executar">Como Executar</a>
</p>

<p align="center">
    <img alt="Design do Projeto" width="650px" src=".github/designProffy.png" />
<p>

<a id="sobre"></a>

<h1>📖 Sobre o Projeto</h1>

O **Proffy** é uma aplicação Web e Mobile feita para Professores darem aulas online.

Este projeto foi idealizado pensando no Dia Nacional dos Profissionais de Educação, criado como forma de homenagear os professores.

Esta aplicação foi desenvolvida durante a **Next Level Week #2**, projeto da [Rocketseat](https://rocketseat.com.br/).

<a id="tecnologias"></a>

<h1>🔩 Tecnologias Utilizadas</h1>

- [Axios](https://github.com/axios/axios)
- [Express](https://expressjs.com/)
- [Expo](https://expo.io/)
- [Knex](http://knexjs.org/)
- [Node.js](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/)
- [ReactJS](https://reactjs.org/)
- [React Native](http://facebook.github.io/react-native/)
- [React Navigation](https://reactnavigation.org/)
- [Typescript](https://www.typescriptlang.org/)
- [SQLite](https://www.sqlite.org/)
- [Yarn](https://yarnpkg.com/)

<a id="web"></a>

<h1>💻 Versão Web</h1>

Caso esteja curioso para saber como é a versão **Web** do **Proffy**, o layout está disponivel no [Figma](https://www.figma.com/file/BsS382bNcgMHnCINzNRKSG/Proffy-Web-Copy).

<a id="mobile"></a>

<h1>📱 Versão Mobile</h1>

Caso esteja curioso para saber como é a versão **Mobile** do **Proffy**, o layout está disponivel no [Figma](https://www.figma.com/file/4wJHWknZ5fCyQxBal5bcP5/Proffy-Mobile-Copy).

<div align="center" flexDirection="row">
</div>

<a id="executar"></a>

<h1>❔ Como Usar a Aplicação</h1>

<h2><strong>Pré-requisitos</strong></h2>

- É **necessário** possuir o **[Node.js](https://nodejs.org/en/)** instalado no computador.
- É **necessário** possuir o **[Git](https://git-scm.com/)** instalado e configurado no computador.
- É **necessário** possuir um gerenciador de pacotes, **[Yarn](https://yarnpkg.com/)** ou **[NPM](https://www.npmjs.com/)**.
- É **necessário** ter o **[Expo](https://expo.io/)** instalado de forma global na máquina.

<h2>Passo 1: Clonando o Projeto na sua máquina:</h2>

Abra seu terminal, escolha um lugar para clonar o repositório e execute:

```sh
  git clone https://github.com/MarcosJBM/Ecoleta-NLW.git
```

<h2>Passo 2: Configurando o Projeto:</h2>

Nas pastas **Server** e **Web** execute:

```sh
 npm install
```

Com isso, dependências do projeto serão instaladas.

Na pasta **Server** voce irá precisar criar o **banco de dados**, execute:

```sh
 npx knex migrate:up "nome da migration"
```

Faça isso com cada Migration.

Voce irá precisar criar uma Seed, execute:

```sh
 npm run knex:seed
```

<h2>Passo 3: Executando a aplicação:</h2>

Para executar a aplicação **Web** e **Mobile** utilize:

```sh
 npm start
```

Para executar o **Server**, utilize:

```sh
 npm run dev
```
