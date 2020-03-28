BACKEND MK2
---------------------------------------


**START**
- yarn dev
- yarn test


**USER**
NODE.JS
EXPRESS
SEQUELIZE - ORM
ESLINT - Padronização de code
PRETTIER - Padronização de code

CELEBRATE - Validação de entrada de informaçoes do backend

JEST - Test do sistema
SUPERTEST - Test do sistema Jest
FAKER - Gerar dados de usuario fakes
FACTORY-GIRL -  Padronizar é centralizar açoes
SQLITE3 - Banco de dados para realizar os testes
// comandos jest ver com detalhes os testes
-- open .
-- __test__/coverage/lcov-report/index.html

## collectCoverageFrom: ['src/**', '!src/database/migrations/**'],

**SEQUELIZE**
- sequelize --help ## todos os comandos sequelize
- sequelize db:create   ## criar banco de dados 
- sequelize db:migrate  ## rodar as migrations
- sequelize migration:create --name=create-users ## criar uma migration

**POSTGRES**
- psql
- \l //lista bancos de dados
- create database mk2;

**ESLINT**
-- https://medium.com/@fabiojanio/node-js-express-es6-eslint-sucrase-de-forma-simples-e-r%C3%A1pida-8467fcfae728