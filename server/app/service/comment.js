'use strict';
// const Service = require('egg').Service;
const BaseService = require('./base');

class CommentService extends BaseService {

  async lists(params, userId) {
    return this.run(async (ctx, app) => {
      const result = await app.model.Comment.findAll({
        where: {
          houseId: params.houseId,
        },
        limit: params.pageSize,
        offset: (params.pageNum - 1) * params.pageSize,
        include: [
          { model: app.model.User, attributes: [ 'avatar', 'username' ] },
        ],
      });
      return result;
    });
  }

  async add(params) {
    return this.run(async (ctx, app) => {
      return await app.model.Comment.create(params);
    });
  }

}

module.exports = CommentService;
