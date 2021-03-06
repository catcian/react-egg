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
  router.post('/api/user/edit', controller.user.edit);
  router.post('/api/commons/citys', controller.commons.citys);
  router.post('/api/commons/upload', controller.commons.upload);
  router.post('/api/house/hot', controller.house.hot);
  router.post('/api/house/search', controller.house.search);
  router.post('/api/house/detail', controller.house.detail);
  router.post('/api/comment/lists', controller.comment.lists);
  router.post('/api/comment/add', controller.comment.add);
  router.post('/api/orders/hasOrder', controller.orders.hasOrder);
  router.post('/api/orders/addOrder', controller.orders.addOrder);
  router.post('/api/orders/delOrder', controller.orders.delOrder);
  router.post('/api/orders/lists', controller.orders.lists);
  router.post('/api/orders/pay', controller.orders.pay);
};
