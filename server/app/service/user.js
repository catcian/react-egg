'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async getUser(username) {
    try {
      const { app } = this;
      const user = await app.model.User.findOne({
        where: {
          username,
        },
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
