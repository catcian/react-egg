'use strict';
// const Controller = require('egg').Controller;
const BaseController = require('./base');

class OrdersController extends BaseController {
  async hasOrder() {
    const { ctx } = this;
    const result = await ctx.service.orders.hasOrder(ctx.userId, ctx.params('houseId'));
    if (result) {
      this.success(result);
    } else {
      this.error();
    }
  }

  async addOrder() {
    const { ctx } = this;
    const result = await ctx.service.orders.addOrder({
      userId: ctx.userId,
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
    const result = await ctx.service.orders.delOrder({
      userId: ctx.userId,
      houseId: ctx.params('houseId'),
    });
    if (result) {
      this.success(result);
    } else {
      this.error();
    }
  }

  async lists() {
    const { ctx } = this;
    const result = await ctx.service.orders.lists({
      ...ctx.params(),
      userId: ctx.userId,
      isPayed: ctx.params('type'),
    });
    if (result) {
      this.success(result);
    } else {
      this.error();
    }
  }

  async invokePay(params) {
    return {
      orderNumber: params.id + new Date().getTime(),
    };
  }

  async pay() {
    const { ctx } = this;
    // const user = await ctx.service.user.getUser(ctx.username);
    const { id } = ctx.params();
    // 查看订单是否存在
    const order = await ctx.service.orders.getOrder(ctx.params('id'));
    if (order) {

      try {
        // 第三方请求
        const beforePay = await this.invokePay({ id });
        const result = await ctx.service.orders.pay({
          id,
          order_number: beforePay.orderNumber,
          updateTime: ctx.helper.time(),
        });

        if (result) {
          await this.success('订单支付成功');
        } else {
          await this.error('订单支付失败');
        }
      } catch (error) {
        await this.error('订单支付失败');
      }

    } else {
      await this.error('订单不存在');
    }
  }
}

module.exports = OrdersController;
