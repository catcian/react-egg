'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const House = app.model.define('house', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: STRING(50),
    info: STRING(150),
    address: STRING(200),
    price: INTEGER,
    publishTime: DATE,
    cityCode: STRING(10),
    showCount: INTEGER,
    startTime: DATE,
    endTime: DATE,
  });

  House.associate = function() {
    // 一个房屋对应多个图片 一对多
    app.model.House.hasMany(app.model.Imgs, { foreignKey: 'houseId' });
  };

  return House;
};
