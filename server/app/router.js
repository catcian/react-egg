'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.post('/api/user/register', controller.user.register);
  router.post('/api/user/login', controller.user.login);
  router.post('/api/user/detail', controller.user.detail);
  router.post('/api/user/logout', controller.user.logout);
  router.post('/api/commons/citys', controller.commons.citys);
  router.post('/api/house/hot', controller.house.hot);
  router.post('/api/house/search', controller.house.search);
  // router.get('/user', controller.user.index);
  // router.get('/user/lists', controller.user.lists);
  // router.get('/user/detail', controller.user.detail);
  // router.get('/user/detail2/:id', controller.user.detail2);
  // router.post('/user/add', controller.user.add);
  // router.put('/user/edit', controller.user.edit);
  // router.del('/user/del', controller.user.del);
  // router.post('/login', controller.user.login);
  // router.post('/logout', controller.user.logout);
  // router.get('/user/info', controller.user.userInfo);
  // router.get('/user/commentLists', controller.user.userCommentLists);
  // router.get('/user/roles', controller.user.roles);
  // router.get('/user/rolesWithUser', controller.user.rolesWithUser);
};
