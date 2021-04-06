'use strict';
const Service = require('egg').Service;
const BaseService = require('./base');

class OrdersService extends BaseService {

  async hasOrder(userId, houseId) {
    return this.run(async () => {
      const result = await this.findOne('Order', {
        where: {
          userId,
          houseId,
        },
      });
      return result;
    });
  }

  async addOrder(params) {
    return this.run(async (ctx, app) => {
      console.log('/OrdersService/addOrder');
      const result = await app.model.Order.create(params);
      console.log('result', result);
      return result;
    });
  }

  async delOrder(params) {
    return this.run(async (ctx, app) => {
      console.log('/OrdersService/delOrder');
      const result = await app.model.Order.destroy({
        where: {
          userId: params.userId,
          houseId: params.houseId,
        },
      });
      console.log(result);
      return result;
    });
  }
}

module.exports = OrdersService;
