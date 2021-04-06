'use strict';
// const Controller = require('egg').Controller;
const BaseController = require('./base');

class CommentController extends BaseController {

  async lists() {
    const { ctx } = this;
    const result = await ctx.service.comment.lists(ctx.params(), ctx.userId);
    if (result) {
      await this.success(result);
    } else {
      await this.error();
    }
  }

  async add() {
    const { ctx } = this;
    const result = await ctx.service.comment.add({
      userId: ctx.userId,
      houseId: ctx.params('houseId'),
      msg: ctx.params('comment'),
      createTime: ctx.helper.time(),
    });
    if (result) {
      await this.success(result);
    } else {
      await this.error();
    }
  }

}

module.exports = CommentController;
