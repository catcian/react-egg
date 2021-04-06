'use strict';
// const Service = require('egg').Service;
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
      // console.log('/OrdersService/addOrder');
      const result = await app.model.Order.create(params);
      return result;
    });
  }

  async delOrder(params) {
    return this.run(async (ctx, app) => {
      // console.log('/OrdersService/delOrder');
      const result = await app.model.Order.destroy({
        where: {
          userId: params.userId,
          houseId: params.houseId,
        },
      });
      return result;
    });
  }

  async lists(params) {
    return this.run(async (ctx, app) => {
      console.log('/OrdersService/lists');
      const result = await app.model.Order.findAll({
        where: {
          userId: params.userId,
          isPayed: params.isPayed,
        },
        limit: params.pageSize,
        offset: (params.pageNum - 1) * params.pageSize,
        include: [
          {
            model: app.model.House,
            as: 'house_as',
            include: [
              {
                model: app.model.Imgs,
                attributes: [ 'url' ],
                limit: 1,
              },
            ],
          },
        ],
      });
      return result;
    });
  }
}

module.exports = OrdersService;
