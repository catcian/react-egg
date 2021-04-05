'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;
  const Order = app.model.define('order', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    order_number: STRING(20),
    userId: INTEGER,
    houseId: INTEGER,
    isPayed: INTEGER,
    createTime: { type: DATE, get() { return new Date(this.getDataValue('createTime').getTime()); } },
    updateTime: { type: DATE, get() { return new Date(this.getDataValue('updateTime').getTime()); } },
  });
  return Order;
};
