'use strict';

module.exports = app => {
  const { STRING, INTEGER } = app.Sequelize;

  const Roles = app.model.define('roles', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: STRING(50),
  });

  Roles.associate = () => {
    app.model.Roles.belongsToMany(app.model.User, {
      through: app.model.UserRoles,
      foreignKey: 'rolesId',
      otherKey: 'userId',
    });
  };
  return Roles;
};
