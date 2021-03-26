'use strict';

module.exports = app => {
  const { STRING } = app.Sequelize;
  const UserRoles = app.model.define('userRoles', {
    userId: STRING,
    rolesId: STRING,
  });
  UserRoles.associate = () => {};
  return UserRoles;
};
