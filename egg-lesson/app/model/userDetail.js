'use strict';

module.exports = app => {
  const { STRING, INTEGER } = app.Sequelize;

  const UserDetail = app.model.define('userDetail', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: INTEGER,
    age: INTEGER,
    addr: STRING(120),
    avatar: STRING(1100),
  });

  UserDetail.associate = function() {
    // 详情与用户 一对一 关系
    // app.model.UserDetail.hasOne(app.model.User, { foreignKey: 'userId' });
  };
  return UserDetail;
};
