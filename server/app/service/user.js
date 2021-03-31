'use strict';

const Service = require('egg').Service;
const md5 = require('md5');
class UserService extends Service {
  async getUser(username, password) {
    try {
      const { app } = this;
      const _where = password ? { username, password: md5(password + app.config.salt) } : { username };
      const user = await app.model.User.findOne({
        where: _where,
      });
      return user;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  async addUser(params) {
    try {
      const { app } = this;
      const result = await app.model.User.create(params);
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}

module.exports = UserService;
