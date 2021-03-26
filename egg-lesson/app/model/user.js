'use strict';

module.exports = app => {
  const { STRING, INTEGER } = app.Sequelize;

  const User = app.model.define('user', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: STRING(20),
    pwd: STRING(50),
  });

  User.associate = function() {
    // 用户与用户详情 一对一 关系
    app.model.User.hasOne(app.model.UserDetail, { foreignKey: 'userId' });
    // 用户与评论 一对多 关系
    app.model.User.hasMany(app.model.Comment, { foreignKey: 'userId', targetKey: 'id' });
    // 用户与角色 多对多 关系
    app.model.User.belongsToMany(app.model.Roles, {
      through: app.model.UserRoles,
      foreignKey: 'userId',
      otherKey: 'rolesId',
    });
  };

  return User;
};
