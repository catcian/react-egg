'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/user', controller.user.index);
  router.get('/lists', controller.user.lists);
  router.get('/detail', controller.user.detail);
  router.get('/detail2/:id', controller.user.detail2);
};
