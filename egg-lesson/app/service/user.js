'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async detail(id) {
    return {
      id,
      name: 'John',
      age: 19,
    };
  }
}

module.exports = UserService;
