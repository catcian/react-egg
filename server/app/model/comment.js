'use strict';

module.exports = app => {
  const { INTEGER, STRING } = app.Sequelize;

  const Comment = app.model.define('comment', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: INTEGER,
    msg: STRING(500),
  });

  Comment.associate = function() {
    // 评论与用户 多对一 关系
    app.model.Comment.belongsTo(app.model.User, { foreignKey: 'userId' });
  };
  return Comment;
};
