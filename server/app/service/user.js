'use strict';

const BaseService = require('./base');
const md5 = require('md5');
class UserService extends BaseService {

  async getUser(username, password) {
    return this.run(async (ctx, app) => {
      const _where = password ? { username, password: md5(password + app.config.salt) } : { username };
      const user = await this.findOne('User', { where: _where });
      return user;
    });
  }

  async addUser(params) {
    return this.run(async (ctx, app) => {
      const result = await app.model.User.create(params);
      return result;
    });
  }

  async edit(params) {
    return this.run(async (ctx, app) => {
      const result = await app.model.User.update({
        avatar: params.avatar,
        phone: params.phone,
        sign: params.sign,
        updateTime: params.updateTime,
      }, {
        where: {
          id: params.id,
        },
      });
      console.log('/UserServive/edit');
      console.log(result);
      return result;
    });
  }
}

module.exports = UserService;
