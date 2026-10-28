const request = require('supertest');
const app = require('./app');

describe('Teste da rota principal', () => {
  it('Deve responder com status 200 na rota GET /', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
  });
});
