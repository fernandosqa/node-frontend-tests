## Testes de End2End com WebdriverIO, Gulp e Mocha

### Pré-Requisitos
Conhecimento básico em Node.js e Javascript

### Tecnologias Utilizadas
O projeto utiliza as seguintes tecnologias:

* Javascript
* [Node.js](https://nodejs.org/)

### Sendo que é composto pelas seguintes bibliotecas:

* [Gulp](https://github.com/gulpjs/gulp) - "instanciamento" :P do selenium standalone e configurações do wdio.conf.js
* [Mocha](https://mochajs.org/) - como framework de testes de unidade.
* [WebDriver.io](http://webdriver.io/) - como framework de testes de aceitação.
* [Chai](http://chaijs.com/) - para suporte à TDD\BDD.
* [BabelJs](https://babeljs.io/) - para utilização da especificação ES6 e ES7 para todos navegadores (organização de código em módulos).
* [NPM - Node Package Manager](https://www.npmjs.com/) - para gerenciamento dos pacotes necessários para build e funcionamento do app .
* [Selenium](https://www.npmjs.com/package/selenium-standalone) - motor de execução dos testes.

Obs: todos os pacotes e suas dependências estão mencionados no package.json

#### Instalação:

* npm install

### Execução:

* gulp test
