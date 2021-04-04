'use strict';
// const Controller = require('egg').Controller;
const BaseController = require('./base');

class HouseController extends BaseController {
  async hot() {
    const { ctx } = this;
    const result = await ctx.service.house.hot();
    if (result) {
      await this.success(result);
    } else {
      await this.error();
    }
  }

  async search() {
    const { ctx } = this;
    const result = await ctx.service.house.search(ctx.params());
    if (result) {
      await this.success(result);
    } else {
      await this.error();
    }
  }

  async detail() {
    const { ctx } = this;
    const result = await ctx.service.house.detail(ctx.params('id'));
    if (result) {
      await this.success({
        banner: result.imgs,
        info: result,
      });
    } else {
      await this.error();
    }
  }
}

module.exports = HouseController;
