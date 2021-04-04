'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const House = app.model.define('house', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: STRING(50),
    info: STRING(150),
    address: STRING(200),
    price: INTEGER,
    publishTime: {
      type: DATE,
      get() {
        return new Date(this.getDataValue('publishTime')).getTime();
      },
    },
    cityCode: STRING(10),
    showCount: INTEGER,
    startTime: {
      type: DATE,
      get() {
        return new Date(this.getDataValue('startTime')).getTime();
      },
    },
    endTime: {
      type: DATE,
      get() {
        return new Date(this.getDataValue('endTime')).getTime();
      },
    },
  });

  House.associate = function() {
    // 一个房屋对应多个图片 一对多
    app.model.House.hasMany(app.model.Imgs, { foreignKey: 'houseId' });
  };

  return House;
};
