'use strict';

const { app } = require('egg-mock/bootstrap');

describe('test/app/controller/user.test.js', () => {
  it('user index', () => {
    return app.httpRequest()
      .get('/user')
      .expect(200)
      .expect('user index');
  });


  it('user lists', async () => {
    await app.httpRequest()
      .get('/lists')
      .expect(200)
      .expect('[{"id":123}]');
  });
});
