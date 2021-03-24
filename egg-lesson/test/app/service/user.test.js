'use strict';

const { app, assert } = require('egg-mock/bootstrap');

describe('test/app/service/user.test.js', () => {
  it.only('user detail', async () => {
    const ctx = app.mockContext();
    const res = await ctx.service.user.detail(10);
    assert(res);
    assert(res.id === 10);
  });
});
