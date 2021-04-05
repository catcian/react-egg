'use strict';
// const Controller = require('egg').Controller;
const BaseController = require('./base');

class CommentController extends BaseController {

  async lists() {
    const { ctx } = this;
    const user = await ctx.service.user.getUser(ctx.username);
    const result = await ctx.service.comment.lists(ctx.params(), user.id);
    console.log('-- /controller/comment/lists result --', result);
    if (result) {
      await this.success(result);
    } else {
      await this.error();
    }
  }

  async add() {
    const { ctx } = this;
    const user = await ctx.service.user.getUser(ctx.username);
    const result = await ctx.service.comment.add({
      userId: user.id,
      houseId: ctx.params('houseId'),
      msg: ctx.params('comment'),
      createTime: ctx.helper.time(),
    });
    console.log('-- /controller/comment/add result --', result);
    if (result) {
      await this.success(result);
    } else {
      await this.error();
    }
  }

}

module.exports = CommentController;
