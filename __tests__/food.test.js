'use strict';

const { app } = require('../src/server');
const supertest = require('supertest');
const { sequelizeDB } = require('../src/models');
const request = supertest(app);

beforeAll(async () => {
  await sequelizeDB.sync();
});

afterAll(async () => {
  await sequelizeDB.drop();
});

describe('REST API', () => {
  it('creates food item', async () => {
    const response = await request.post('/food').send({
      name: 'test',
      type: 'test',
    });

    expect(response.body.name).toEqual('test');
  });
});

