const faker = require('faker');
const { factory } = require('factory-girl');
const { User } = require('../src/app/models');

factory.define('User', User, {
  name: faker.name.findName(),
  login: faker.internet.userName(),
  password: faker.internet.password(),
});

module.exports = factory;
