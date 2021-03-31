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
      .get('/user/lists')
      .expect(200)
      .expect('[{"id":123}]');
  });

  it('user add', async () => {
    await app.httpRequest()
      .post('/user/add')
      .send({
        name: 'CatCian',
        age: 39,
      })
      .expect(200)
      .expect({
        status: 200,
        data: {
          name: 'CatCian',
          age: 39,
        },
      });
  });
});
