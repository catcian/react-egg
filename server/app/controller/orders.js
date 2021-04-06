'use strict';
const Controller = require('egg').Controller;
const BaseController = require('./base');

class OrdersController extends BaseController {
  async hasOrder() {
    const { ctx } = this;
    const user = await ctx.service.user.getUser(ctx.username);
    const result = await ctx.service.orders.hasOrder(user.id, ctx.params('houseId'));
    if (result) {
      this.success(result);
    } else {
      this.error();
    }
  }

  async addOrder() {
    const { ctx } = this;
    const user = await ctx.service.user.getUser(ctx.username);
    const result = await ctx.service.orders.addOrder({
      userId: user.id,
      houseId: ctx.params('houseId'),
      isPayed: 0,
      createTime: ctx.helper.time(),
    });
    if (result) {
      this.success(result);
    } else {
      this.error();
    }
  }

  async delOrder() {
    const { ctx } = this;
    const user = await ctx.service.user.getUser(ctx.username);
    const result = await ctx.service.orders.delOrder({
      userId: user.id,
      houseId: ctx.params('houseId'),
    });
    if (result) {
      this.success(result);
    } else {
      this.error();
    }
  }
}

module.exports = OrdersController;
